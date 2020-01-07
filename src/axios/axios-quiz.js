import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-6a44e.firebaseio.com/'
})