import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useApi.js';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const Reviews = () => {
    const { category } = useParams();
    const { reviewsList, isLoading, page, setPage } = useReviews(category);

    // const handleScroll = () => {
    //     const currentDiv = document.getElementById("contentWindow");
    //     if (window.scrollY - 100 + window.innerHeight >= currentDiv.clientHeight) {
    //         console.log('Fetch more items!')
    //         setPage(currPage => currPage + 1);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const loadMore = () => {
        setPage(currPage => currPage + 1)
    }

    return (
        <div id="contentWindow" className="MainContent-content">
            <h2 id="reviewsTitle">Reviews for <span className="category-title">{category ? category.replace(/-/g, ' ') : 'all'}</span> Games</h2>
            <ul id="listContent">
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
            <>
            {isLoading ? 
                <h3 className="MainContent-content">{isLoading && 'Loading.......'}</h3> 
                : <button onClick={loadMore}>Load More</button>
            }
            </>
            </ul>
        </div>
    );
};

export default Reviews;