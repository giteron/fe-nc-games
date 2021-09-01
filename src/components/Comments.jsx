import { Link } from 'react-router-dom';
import { useComments } from '../hooks/useApi.js';

const Comments = (props) => {
    const { review_id } = props;
    const { commentsList, isLoading } = useComments(review_id);

    if (isLoading) return <h2>Loading...</h2>
    if (commentsList.length === 0) return <>{'No comments yet...'}</>
    return (
        <>
            {commentsList.map(comment => {
                return (
                    <section className="oneComment" key={comment.comment_id}>
                        <p className="oneComment__nameDate">
                            <Link to={`/users/${comment.author}`}>{comment.author}</Link>
                             {new Date(comment.created_at).toLocaleDateString()}
                        </p>
                        <p className="oneComment__body">{comment.body}</p>
                        <p className="oneComment__votes">{`${comment.votes} ${comment.votes === 1 ? 'vote' : 'votes'}`}</p>
                    </section>
                );
            })}
        </>
    );
};

export default Comments;