import { useReviews } from '../hooks/useApi.js';
import { deleteReviewByReviewId } from '../api.js';
import { Link } from 'react-router-dom';

const ManageReviews = (props) => {
    const { signedInUser, username } = props;
    const { reviewsList, isLoading } = useReviews(null, 1000);
    const thisUsersReviews = reviewsList.filter(review => {
        return review.owner === username;
    });

    const deleteReview = (review_id) => {
        // console.log('deleteReview starting', `id ${review_id}`)
        deleteReviewByReviewId(review_id);
    };

    if (isLoading) return <h4>Loading...</h4>
    return (
        <section>
            {thisUsersReviews.map(review => {
                return (
                    <section key={review.review_id} className="manageContent-card">
                        <section id="manageContent-details">
                        <img 
                            id="manageContent-img"src={review.review_img_url} 
                            alt={review.title}
                        />
                        <Link to={`/reviews/${review.review_id}`}><h4>{review.title}</h4></Link>
                        <p>{new Date(review.created_at).toLocaleDateString()}</p>
                        </section>
                        <section className="manageContent-options"> 
                        { signedInUser.username === username && <button
                            onClick={(() => {deleteReview(review.review_id)})}
                        >Delete</button> }
                        </section>
                    </section>
                )
            })}
        </section>
    );
};

export default ManageReviews;