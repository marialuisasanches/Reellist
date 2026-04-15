import { useEffect, useMemo, useState } from "react";
import styles from "./MovieCard.module.css";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function getStoredMovies() {
  return JSON.parse(localStorage.getItem("myList")) || [];
}

function MovieCard({ movie, onFavoriteChange }) {
  const [storedMovies, setStoredMovies] = useState(getStoredMovies);

  const isFavorite = useMemo(
    () => storedMovies.some((m) => m.id === movie.id),
    [storedMovies, movie.id],
  );

  useEffect(() => {
    const syncFromStorage = () => setStoredMovies(getStoredMovies());

    window.addEventListener("storage", syncFromStorage);

    return () => window.removeEventListener("storage", syncFromStorage);
  }, []);

  const handleToggleFavorite = () => {
    const stored = getStoredMovies();
    let updated = stored;

    if (isFavorite) {
      updated = stored.filter((m) => m.id !== movie.id);
    } else {
      updated = [...stored, movie];
    }

    localStorage.setItem("myList", JSON.stringify(updated));
    setStoredMovies(updated);

    if (onFavoriteChange) {
      const nextIsFavorite = updated.some((m) => m.id === movie.id);
      onFavoriteChange(movie.id, nextIsFavorite);
    }
  };

  return (
    <div className={styles.movieCard}>
      <button className={styles.favoriteButton} onClick={handleToggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
        className={styles.image}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.rating}>⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default MovieCard;
