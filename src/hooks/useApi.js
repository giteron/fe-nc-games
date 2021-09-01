import { useEffect, useState } from 'react';
import getReviews  from '../api.js';

export const useReviews = () => {
    const [ reviewsList, setReviewsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getReviews()
            .then((reviews) => {
                //  console.log(data.reviews);
                setReviewsList(reviews);
                setIsLoading(false);
            });
    }, [setReviewsList]);

    return { reviewsList, isLoading }
};