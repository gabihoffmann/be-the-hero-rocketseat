import axios from 'axios';

const api = axios.create({ 
    //IP da Máquina exibido pelo AXIOS com porta do BACKEND
    baseURL: "http://192.168.0.8:3333"
});

export default api;