import { useReviews } from '../hooks/useApi.js';
import { deleteReviewByReviewId } from '../api.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext.jsx';

const ManageReviews = (props) => {
    const { username } = props;
    const { signedInUser } = useContext(UserContext);
    const { reviewsList, setReviewsList, isLoading } = useReviews(null, 1000);
    const thisUsersReviews = reviewsList.filter(review => {
        return review.owner === username;
    });

    const deleteReview = (review_id) => {
        // console.log('deleteReview starting', `id ${review_id}`)
        deleteReviewByReviewId(review_id)
        .then(() => {
            const newList = thisUsersReviews.filter((item) => item.review_id !== review_id);
            setReviewsList(newList);
        })
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
                        ><i className="fa fa-trash-o"></i></button> }
                        </section>
                    </section>
                )
            })}
        </section>
    );
};

export default ManageReviews;