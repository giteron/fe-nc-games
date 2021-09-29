import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { deleteCommentByCommentId } from '../api.js';
import { useComments } from '../hooks/useApi.js';
import { UserContext } from '../UserContext.jsx';
import Votes from './Votes.jsx';

const Comments = (props) => {
    const { review_id, comment_count } = props;
    const { commentsList, setCommentsList, isLoading, setPage } = useComments(review_id);
    const { signedInUser } = useContext(UserContext);

    const loadMore = () => {
        setPage(currPage => currPage + 1)
    };

    const deleteComment = (comment_id) => {
        deleteCommentByCommentId(comment_id)
        .then(() => {
            const newList = commentsList.filter((item) => item.comment_id !== comment_id);
            setCommentsList(newList);
        })
    };

    return (
        <>
        {commentsList.length === 0 && <>{'No comments yet...'}</>}
            {commentsList.map(comment => {
                return (
                    <section className="oneComment" key={comment.comment_id}>
                        <p className="oneComment__nameDate">
                            <Link to={`/users/${comment.author}`}>{comment.author}</Link>
                             {new Date(comment.created_at).toLocaleDateString()}
                        </p>
                        <p className="oneComment__body">{comment.body}</p>
                        <Votes 
                            className="oneComment__votes" 
                            votes={comment.votes} 
                            component_id={comment.comment_id}
                            path="comments"
                        />
                        <section className="manageContent-options"> 
                        { signedInUser.username === comment.author && <button
                            onClick={() => {deleteComment(comment.comment_id)}}
                        ><i className="fa fa-trash-o"></i></button> }
                        </section>
                    </section>
                );
            })}
            <section id="loadMore">
            {isLoading ? 
                <h4>Loading...</h4> :
                commentsList.length < comment_count ?
                <button onClick={() => loadMore()}>Load more</button> :
                <h4>No more comments</h4>
            }
            </section>
        </>
    );
};

export default Comments;