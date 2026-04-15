import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./MyLists.module.css";

function MyLists() {
  const [movies, setMovies] = useState([]);

  const handleFavoriteChange = (movieId, isFavoriteNow) => {
    if (!isFavoriteNow) {
      setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movieId));
    }
  };

  useEffect(() => {
    const loadMovies = () => {
      const stored = JSON.parse(localStorage.getItem("myList")) || [];
      setMovies(stored);
    };

    loadMovies();

    window.addEventListener("storage", loadMovies);

    return () => window.removeEventListener("storage", loadMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1>
        Minha <span>Lista</span>
      </h1>

      {movies.length === 0 ? (
        <p>Sua lista está vazia</p>
      ) : (
        <MovieList movies={movies} onFavoriteChange={handleFavoriteChange} />
      )}
    </div>
  );
}

export default MyLists;
