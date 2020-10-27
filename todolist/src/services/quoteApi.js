import axios from 'axios';

const quoteApi = axios.create({
    baseURL: 'https://quotes.rest/qod?language=en',
});

export default quoteApi;
