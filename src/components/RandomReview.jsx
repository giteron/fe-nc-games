import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useApi.js';
import CommentSection from './CommentSection.jsx';
import Votes from './Votes.jsx';

const RandomReview = () => {
    const { reviewsList, totalReviews, isLoading } = useReviews(null, 1000);
    const todaysDate = new Date(Date.now()).toLocaleDateString();
    const dailyReviewIndex = todaysDate.slice(0,2)
    const todaysReview = reviewsList[dailyReviewIndex] || reviewsList[totalReviews - 1];

    // console.log(review_id, '------- this is the review ID')
    if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            <h2 id="reviewsTitle">Review of the day!</h2>
            <li className="singleReview-card" key={todaysReview.review_id}>
                <h2>{todaysReview.title}</h2> 
                <Votes 
                    votes={todaysReview.votes} 
                    component_id={todaysReview.review_id}
                    path="reviews"
                />
                <p>
                    <span className="singleReview-card__owner">A review by {todaysReview.owner}</span>
                    <span className="singleReview-card__date">{new Date(todaysReview.created_at).toLocaleDateString()}</span>
                </p>
                <p>
                    <span className="singleReview-card__creator">Creator: {todaysReview.designer}</span>
                    <span className="singleReview-card__category">Category: 
                        <Link to={`/categories/${todaysReview.category}`}>
                            {todaysReview.category}
                        </Link>
                    </span>
                            
                </p>
                <img className="singleReview-card__img" src={todaysReview.review_img_url} alt={todaysReview.title}/>
                <p>{todaysReview.review_body}</p>
            </li>
            <CommentSection review_id={todaysReview.review_id} comment_count={todaysReview.comment_count} />
            {/* <CreateComment review_id={review_id}/>
            <li className="commentsSection">
                <h3>{`Comments: ${todaysReview.comment_count}`}</h3>
                <Expandable>
                    <Comments review_id={review_id} comment_count={todaysReview.comment_count}/>
                </Expandable>
            </li> */}
        </div>
    );
};

export default RandomReview;