import axios from 'axios';
export default axios.create({
    baseURL:'https://movies-api-backend-production.up.railway.app/',
    headers:{"ngrok-skip-browser-warning":"true"}
});