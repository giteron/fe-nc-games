import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://be-ncgames-server.herokuapp.com/api'
});

const getReviews = async () => {
    const {data} = await gamesApi.get('/reviews');
    return data.reviews;
};

const getUsers = async () => {
    const {data} = await gamesApi.get('/users');
    return data.users;
};

const getCategories = async () => {
    const {data} = await gamesApi.get('/categories');
    return data.categories;
};

const getReviewById = async (review_id) => {
    // console.log(review_id, '----------- review_id in AXIOS')
    const {data} = await gamesApi.get(`/reviews/${review_id}`);
    // console.log(data, '----- data')
    return data.review;
};

const getCommentsByReviewId = async (review_id) => {
    const {data} = await gamesApi.get(`/reviews/${review_id}/comments`);
    // console.log(data, '------------data')
    return data.comments;
};

const deleteReviewByReviewId = async (review_id) => {
    console.log('deleteReviewByReviewId starting', `id ${review_id}`)
    await gamesApi.delete(`/reviews/14`)
    .then(() => {
        console.log('this should have deleted now...')
    })

};

const patchVotes = async (path, component_id, increment) => {
    const { data } = await gamesApi.patch(`/${path}/${component_id}`, {
        inc_votes: increment
    });
    return console.log(data);
};

export { 
    getReviews, 
    getUsers, 
    getCategories, 
    getReviewById, 
    getCommentsByReviewId,
    deleteReviewByReviewId,
    patchVotes
};