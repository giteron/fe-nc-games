import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useApi.js';
import { useParams } from 'react-router';

const Reviews = () => {
    const { category } = useParams();
    const { reviewsList, isLoading } = useReviews(category);

    if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            <ul>
                {reviewsList.map(review => {
                    return (
                        <Link to={`/reviews/${review.review_id}`} key={review.review_id} >
                            <li className="reviews-card">
                                <h3>{review.title}</h3>
                                <img className="reviews-card__img" src={review.review_img_url} alt={review.title}/>
                                <span className="reviews-card__owner">{review.owner}</span>
                                <span className="reviews-card__date">{new Date(review.created_at).toLocaleDateString()}</span>
                                <span className="reviews-card__votes"><span className="votesCount">{review.votes}</span> votes</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Reviews;