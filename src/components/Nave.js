import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import SearchBox from './SearchBox'

function Nav() {

  const [clickedMovie, setClickedMovie] = useState(true);
  const [clickedTvshow, setClickedTvshow] = useState(false);

  return (
    <nav>
      <ul className="nav-links">
        <Link
          onClick={() => {
            setClickedMovie(true);
            setClickedTvshow(false);
          }}
          className={clickedMovie ? "mount-style" : "nav-style"}
          to="/"
        >
          {" "}
          <li>Movies</li>{" "}
        </Link>
        <Link
          onClick={() => {
            setClickedMovie(false);
            setClickedTvshow(true);
          }}
          className={clickedTvshow ? "mount-style" : "nav-style"}
          to="/tvshows"
        >
          {" "}
          <li>TV Shows</li>{" "}
        </Link>
      </ul>

     <SearchBox/>
    </nav>
  );
}



export default Nav;

