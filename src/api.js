import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://be-ncgames-server.herokuapp.com/api'
});

const getReviews = async () => {
    const {data} = await gamesApi.get('/reviews');
    return data.reviews;
}

export default getReviews ;