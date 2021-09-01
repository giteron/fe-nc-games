import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSingleReview } from '../hooks/useApi.js';

const SingleReview = () => {
    const { review_id } = useParams();
    const { singleReview, isLoading } = useSingleReview(review_id);
    
    // console.log(review_id, '------- this is the review ID')
    if (isLoading) return <h2 className="MainContent-content">Loading...</h2>
    return (
        <div className="MainContent-content">
            <li className="singleReview-card" key={singleReview.review_id}>
                <h2>{singleReview.title}</h2> 
                <span className="singleReview-card__votes">{singleReview.votes} votes</span>
                <p>
                    <span className="singleReview-card__owner">A review by {singleReview.owner}</span>
                    <span className="singleReview-card__date">{new Date(singleReview.created_at).toLocaleDateString()}</span>
                </p>
                <p>
                    <span className="singleReview-card__creator">Creator: {singleReview.designer}</span>
                    <span className="singleReview-card__category">Category: 
                        <Link to={`/categories/${singleReview.category}`}>
                            {singleReview.category}
                        </Link>
                    </span>
                            
                </p>
                <img className="singleReview-card__img" src={singleReview.review_img_url} alt={singleReview.title}/>
                <p>{singleReview.review_body}</p>
            </li>
            <li className="commentsSection"><h3>{`//Comments: ${singleReview.comment_count} [+]...`}</h3></li>
            
        </div>
    );
};

export default SingleReview;