import fetch from 'node-fetch'
;//내 서버와 다른 URL을 통합하고 싶을 때의 예시.
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  let req_url = API_URL;
  //limit가 0보다 크면 요청 url에 해당 string 추가.
  if(limit>0) {
    req_url += `limit=${limit}`
  }
  if(rating>0){
    req_url += `&minimum_rating=${rating}`
  }
 return fetch(req_url).then(res=> res.json()).then(json=> json.data.movies);
 }
 