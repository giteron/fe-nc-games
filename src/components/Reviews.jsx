import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useApi.js';
import { useParams } from 'react-router';
import { useRef, useCallback } from 'react';

const Reviews = () => {
    const { category } = useParams();
    const { reviewsList, isLoading, setPage, hasMore } = useReviews(category);
    const observer = useRef();
    const lastReviewElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(currPage => currPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore, setPage]);

    return (
        <div id="contentWindow" className="MainContent-content">
            <h2 id="reviewsTitle">Reviews for <span className="category-title">{category ? category.replace(/-/g, ' ') : 'all'}</span> Games</h2>
            <ul id="listContent">
                {reviewsList.map((review, index) => {
                        return (
                            <Link to={`/reviews/${review.review_id}`} key={review.review_id} >
                            <li className="reviews-card">
                            {reviewsList.length === index + 1 && <h3 ref={lastReviewElementRef}>{review.title}</h3>}
                            {reviewsList.length !== index + 1 && <h3>{review.title}</h3>}
                                <img className="reviews-card__img" src={review.review_img_url} alt={review.title} />
                                <span className="reviews-card__owner">{review.owner}</span>
                                <span className="reviews-card__date">{new Date(review.created_at).toLocaleDateString()}</span>
                                <span className="reviews-card__votes"><span className="votesCount">{review.votes}</span> votes</span>
                            </li>
                        </Link>
                        )
                    })}
                <>
                    {isLoading && <h3 className="MainContent-content">{'Loading.......'}</h3>}
                </>
            </ul>
        </div>
    );
};

export default Reviews;