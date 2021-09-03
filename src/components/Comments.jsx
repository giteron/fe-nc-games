import { Link } from 'react-router-dom';
import { deleteCommentByCommentId } from '../api.js';
import { useComments } from '../hooks/useApi.js';
import Votes from './Votes.jsx';

const Comments = (props) => {
    const { review_id, signedInUser } = props;
    const { commentsList, isLoading } = useComments(review_id);

    const deleteComment = (comment_id) => {
        // console.log('deleteReview starting', `id ${review_id}`)
        deleteCommentByCommentId(comment_id)
    };

    return (
        <>
        {isLoading && <h2>Loading...</h2>}
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
                        >Delete</button> }
                        </section>
                    </section>
                );
            })}
        </>
    );
};

export default Comments;