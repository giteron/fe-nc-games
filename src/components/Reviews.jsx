import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useApi.js';

const Reviews = (props) => {
    const { reviewsList } = useReviews();

    // useEffect(() => {
    //     fetch('https://be-ncgames-server.herokuapp.com/api/reviews')
    //         .then(response => response.json())
    //         .then((data) => {
    //              console.log(data.reviews)
    //             setReviewsList(data.reviews)
    //         });
    // }, [setReviewsList]);

    return (
        <div className="MainContent-content">
            <ul>
                {reviewsList.map(review => {
                    return (
                        <Link to={`/reviews/${review.review_id}`} >
                            <li className="reviews-card" key={review.review_id}>
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