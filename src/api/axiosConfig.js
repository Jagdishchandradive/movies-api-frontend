import axios from 'axios';
export default axios.create({
    baseURL:'https://d39b-27-4-199-131.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning":"true"}
});