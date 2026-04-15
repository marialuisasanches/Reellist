import styles from "./SearchBar.module.css";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function SearchBar({ onSearch, setIsSearching }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim() !== "") {
        setIsSearching(true);
        searchMovies(search).then(onSearch);
      } else {
        setIsSearching(false);
        getPopularMovies().then(onSearch);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search, onSearch, setIsSearching]);

  return (
    <div className={styles.searchFilms}>
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
