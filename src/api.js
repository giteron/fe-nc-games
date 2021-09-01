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

export { getReviews, getUsers, getCategories };