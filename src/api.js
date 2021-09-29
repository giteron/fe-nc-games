import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://be-ncgames-server.herokuapp.com/api'
});

const getReviews = async (page, category, limit = 8) => {
    const {data} = await gamesApi.get('/reviews', 
    { params: { p: page, limit, category } });
    return data;
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

const getCommentsByReviewId = async (review_id, page, limit = 5) => {
    const {data} = await gamesApi.get(`/reviews/${review_id}/comments`,
     { params: { p: page, limit } });
    // console.log(data, '------------data')
    return data;
};

const deleteReviewByReviewId = async (review_id) => {
    console.log('deleteReviewByReviewId starting', `id ${review_id}`)
    await gamesApi.delete(`/reviews/${review_id}`)
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

const postReview = async (reviewBody) => {
    const { data } = await gamesApi.post(`/reviews`, reviewBody);
    console.log('posted')
    return data.review;
}

const postComment = async (commentBody, review_id) => {
    const { data } = await gamesApi.post(`/reviews/${review_id}/comments`, 
    commentBody);
    console.log('posted')
    console.log(data);
    return data;
};

const getUserByUsername = async (username) => {
    // console.log(username, '----------- username in AXIOS')
    const {data} = await gamesApi.get(`/users/${username}`);
    console.log(data, '----- data')
    return data.user;
};

const deleteCommentByCommentId = async (comment_id) => {
    console.log('deleteCommentByCommentId starting', `id ${comment_id}`)
    await gamesApi.delete(`/comments/${comment_id}`)
    .then(() => {
        console.log('this should have deleted now...')
    })
};

export { 
    getReviews, 
    getUsers, 
    getCategories, 
    getReviewById, 
    getCommentsByReviewId,
    deleteReviewByReviewId,
    patchVotes,
    postReview,
    postComment,
    getUserByUsername,
    deleteCommentByCommentId
};