import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchFilms}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Buscar filmes..."
      />
    </div>
  );
}

export default SearchBar;
