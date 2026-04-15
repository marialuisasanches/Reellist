import styles from "./MovieCard.module.css";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <div className={styles.movieCard}>
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

export default MovieCard; // Essencial para o MovieList conseguir importar
