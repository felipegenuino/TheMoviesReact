 import axios from 'axios';

//  const api_key = a75d3ba0b2898b985b4028305ced58d4;
// movie/76341?api_key=a75d3ba0b2898b985b4028305ced58d4&language=pt-BR
// http://api.themoviedb.org/3/discover/movie?api_key=a75d3ba0b2898b985b4028305ced58d4&sort_by=popularity.desc&include_adult=false

 const api  = axios.create({
     baseURL: 'https://api.themoviedb.org/3/'
 })
 
 export default api;