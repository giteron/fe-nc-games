import { useEffect, useState } from 'react';

export const useReviews = () => {
    const [ reviewsList, setReviewsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://be-ncgames-server.herokuapp.com/api/reviews')
            .then(response => response.json())
            .then((data) => {
                //  console.log(data.reviews);
                setReviewsList(data.reviews);
                setIsLoading(false);
            });
    }, [setReviewsList]);

    return { reviewsList, isLoading }
};