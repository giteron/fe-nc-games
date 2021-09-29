import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { deleteCommentByCommentId } from '../api.js';
import { UserContext } from '../UserContext.jsx';
import Votes from './Votes.jsx';

const Comments = (props) => {
    const {                        
        comment_count,
        setCommentCount,
        commentsList,
        setCommentsList,
        isLoading,
        setPage
    } = props;
    const { signedInUser } = useContext(UserContext);

    const loadMore = () => {
        setPage(currPage => currPage + 1)
    };

    const deleteComment = (comment_id) => {
        deleteCommentByCommentId(comment_id)
        .then(() => {
            const newList = commentsList.filter((item) => item.comment_id !== comment_id);
            setCommentsList(newList);
            setCommentCount(currCount => currCount - 1)
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
                        {comment.comment_id ? <Votes 
                            className="oneComment__votes" 
                            votes={comment.votes} 
                            component_id={comment.comment_id}
                            path="comments"
                        /> : <p>Refresh to vote!</p>}
                        <section className="manageContent-options"> 
                        { signedInUser.username === comment.author && comment.comment_id ? 
                        <button
                            onClick={() => {deleteComment(comment.comment_id)}}
                        ><i className="fa fa-trash-o"></i></button> : <p>Refresh to delete!</p> }
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