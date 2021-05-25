import fetch from 'node-fetch'
;//내 서버와 다른 URL을 통합하고 싶을 때의 예시.
const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  return fetch(`${API_URL}`)
  .then(res => res.json())
  .then(json=> console.log(json.data.movies));

}
