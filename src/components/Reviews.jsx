import { Link } from 'react-router-dom';
import { useReviews } from '../hooks/useApi.js';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const Reviews = () => {
    const { category } = useParams();
    const { reviewsList, isLoading, page, setPage, totalReviews } = useReviews(category);

    const handleScroll = () => {
        const loadPoint = document.getElementById("endPage-anchor");
        const loadPointOffset = loadPoint.offsetTop + loadPoint.clientHeight + 25;
        const pageOffset = window.pageYOffset + window.innerHeight;
        if (pageOffset > loadPointOffset) {
            if (page * 8 >= totalReviews) {
                // console.log(page, 8, totalReviews)
                loadMore();
            };
        };
    };

    const loadMore = () => {
        setPage(currPage => currPage + 1)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div id="contentWindow" className="MainContent-content">
            <h2 id="reviewsTitle">Reviews for <span className="category-title">{category ? category.replace(/-/g, ' ') : 'all'}</span> Games</h2>
            <ul id="listContent">
                {reviewsList.map(review => {
                    return (
                        <Link to={`/reviews/${review.review_id}`} key={review.review_id} >
                            <li className="reviews-card">
                                <h3>{review.title}</h3>
                                <img className="reviews-card__img" src={review.review_img_url} alt={review.title} />
                                <span className="reviews-card__owner">{review.owner}</span>
                                <span className="reviews-card__date">{new Date(review.created_at).toLocaleDateString()}</span>
                                <span className="reviews-card__votes"><span className="votesCount">{review.votes}</span> votes</span>
                            </li>
                        </Link>
                    );
                })}
                <>
                    {isLoading && <h3 className="MainContent-content">{'Loading.......'}</h3>}
                </>
            </ul>
            <section id="endPage-anchor"></section>
        </div>
    );
};

export default Reviews;