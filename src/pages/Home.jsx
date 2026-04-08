import "./Home.css";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header>
      <div className="title">
        reel<span>list</span>
      </div>

      <SearchBar />

      <Link to="/mylist">
        <button className="mylist-btn">My List</button>
      </Link>
    </header>
  );
}

export default Home;
