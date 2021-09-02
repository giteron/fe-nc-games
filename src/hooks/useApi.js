import { useEffect, useState } from 'react';
import { 
    getReviews, 
    getUsers, 
    getCategories, 
    getReviewById, 
    getCommentsByReviewId,
    deleteReviewByReviewId
} from '../api.js';

export const useReviews = () => {
    const [ reviewsList, setReviewsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
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
        setIsLoading(true);
        getUsers()
            .then((users) => {
                //  console.log(users);
                setUsersList(users);
                setIsLoading(false);
            });
    }, [setUsersList]);

    return { usersList, isLoading }
};

export const useCategories = () => {
    const [ categoriesList, setCategoriesList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCategories()
            .then((categories) => {
                //  console.log(categories);
                setCategoriesList(categories);
                setIsLoading(false);
            });
    }, [setCategoriesList]);

    return { categoriesList, isLoading }
};

export const useSingleReview = (review_id) => {
    // console.log(review_id, '------- this is the review ID');

    const [ singleReview, setSingleReview ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getReviewById(review_id)
            .then((review) => {
                //  console.log(review, '-----fetched review');
                setSingleReview(review);
                setIsLoading(false);
            });
    }, [review_id]);

    return { singleReview, isLoading }
};

export const useComments = (review_id) => {
    // console.log(review_id, '------- this is the review ID');

    const [ commentsList, setCommentsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByReviewId(review_id)
            .then((comments) => {
                //  console.log(comments);
                setCommentsList(comments);
                setIsLoading(false);
            });
    }, [review_id]);

    return { commentsList, isLoading }
};


// export const useDeleteSingleReview = (review_id) => {
//     // console.log(review_id, '------- this is the review ID');

//     const [ singleReview, setSingleReview ] = useState({});
//     const [ isLoading, setIsLoading ] = useState(true);

//     useEffect(() => {
//         setIsLoading(true);
//         getReviewById(review_id)
//             .then((review) => {
//                 //  console.log(review, '-----fetched review');
//                 setSingleReview(review);
//                 setIsLoading(false);
//             });
//     }, [review_id]);

//     return { singleReview, isLoading }
// };