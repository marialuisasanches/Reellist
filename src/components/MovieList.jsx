import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

// PRECISA TER AS CHAVES { movies }
function MovieList({ movies }) {
  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
