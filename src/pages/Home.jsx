import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { getPopularMovies } from "../services/api";

import styles from "./Home.module.css";

function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getPopularMovies();
      setMovies(data);
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          reel<span>list</span>
        </div>

        <SearchBar onSearch={setMovies} setIsSearching={setIsSearching} />

        <Link to="/mylist">
          <button className={styles.button}>My List</button>
        </Link>
      </header>

      <main className={styles.container}>
        <h2 className={styles.title}>Filmes Populares</h2>

        <MovieList movies={movies} isSearching={isSearching} />
      </main>
    </div>
  );
}

export default Home;
