import axios from "axios";

//base da url: https://api.themoviedb.org
//url da api:  /movie/now_playing?api_key=ee4d24c554e6a7903843dafc36092514&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;