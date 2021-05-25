import fetch from 'node-fetch'
;//내 서버와 다른 URL을 통합하고 싶을 때의 예시.
const API_URL = "https://api.themoviedb.org/3/movie/550?api_key=66ab4cea153083ca17a87321c592b83c";

export const getMovies = (limit, rating) => {
  fetch(API_URL)
  .then(res => res.json())
  .then(json => console.log(json.data.movies));

}
