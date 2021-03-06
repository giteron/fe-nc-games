import { useEffect, useState } from 'react';
import { 
    getReviews, 
    getUsers, 
    getCategories, 
    getReviewById, 
    getCommentsByReviewId,
    getUserByUsername
} from '../api.js';

export const useReviews = (category, limit) => {
    const [ reviewsList, setReviewsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ page, setPage ] = useState(1);
    const [ totalReviews, setTotalReviews ] = useState(0);
    const [ hasMore, setHasMore ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getReviews(page, category, limit)
            .then((data) => {
                setReviewsList(currList => [...currList, ...data.reviews]);
                setTotalReviews(data.total_count)
                setHasMore(data.total_count > reviewsList.length + 8)
                setIsLoading(false);
            });
    }, [setReviewsList, category, page, limit]);

    return { reviewsList, totalReviews, setReviewsList, isLoading, setPage, hasMore }
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
    const [ page, setPage ] = useState(1);
    // const [ totalComments, setTotalComments ] = useState(0);



    useEffect(() => {
        setIsLoading(true);
        getCommentsByReviewId(review_id, page)
            .then((data) => {
                setCommentsList(currList => [...currList, ...data.comments]);
                // setTotalReviews(data.total_count)
                setIsLoading(false);
            });
    }, [review_id, page]);

    return { commentsList, isLoading, page, setPage, setCommentsList }
};

export const useSingleUser = (username) => {

    const [ singleUser, setSingleUser ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getUserByUsername(username)
            .then((user) => {
                //  console.log(review, '-----fetched review');
                setSingleUser(user);
                setIsLoading(false);
            });
    }, [username]);

    return { singleUser, isLoading }
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