const apiKey = "7e5122f42b3d47b2f9c1deaf4e1d2214";

const Requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
  // requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`,
};
export default Requests;