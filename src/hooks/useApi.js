import { useEffect, useState } from 'react';
import { getReviews, getUsers } from '../api.js';

export const useReviews = () => {
    const [ reviewsList, setReviewsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getReviews()
            .then((reviews) => {
                //  console.log(reviews);
                setReviewsList(reviews);
                setIsLoading(false);
            });
    }, [setReviewsList]);

    return { reviewsList, isLoading }
};

export const useUsers = () => {
    const [ usersList, setUsersList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getUsers()
            .then((users) => {
                //  console.log(users);
                setUsersList(users);
                setIsLoading(false);
            });
    }, [setUsersList]);

    return { usersList, isLoading }
};