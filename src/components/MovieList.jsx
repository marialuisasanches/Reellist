import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ movies = [], isSearching, onFavoriteChange }) {
  if (movies.length === 0 && isSearching) {
    return <p>Nenhum filme encontrado 😢</p>;
  }

  return (
    <div className={styles.movieList}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onFavoriteChange={onFavoriteChange}
        />
      ))}
    </div>
  );
}

export default MovieList;
