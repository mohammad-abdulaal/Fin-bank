import axios from "axios";

// export const instance = axios.create({
//     baseURL: 'http://localhost:8000/',
//     timeout: 1000,
//     headers: {'Content-Type': 'applicaton/json'}
//   });

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials:true,
});

export default api;
