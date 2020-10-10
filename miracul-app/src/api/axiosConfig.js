import axios from 'axios';
export default axios.create({
    baseURL: 'http://localhost:9000/api/v1'
});

export const imageUrl = 'http://localhost:9000/images';