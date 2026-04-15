const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`,
  );
  const data = await res.json();
  return data.results;
};
