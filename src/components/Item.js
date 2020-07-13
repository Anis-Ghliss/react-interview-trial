import React,{useState} from "react";
import {NavLink} from 'react-router-dom'

function Item(prop) {

    const [favBtn,setFavBtn] = useState(false)
    const [seenBtn,setSeenBtn] = useState(false)
    const link = `/details/${prop.id}/${prop.type}`

  return (
    <div className="main-container">
      <div className="movie-item-container">
        <NavLink to={link} style={{textDecoration:'none'}}>
            <img className="movie-poster" src={"https://image.tmdb.org/t/p/w500"+prop.poster} alt={prop.title} />
        <div className="info-details">
            <p className="movie-title">{prop.title}</p>
            <small className="movie-date"> Release Date : {prop.date}</small>
        </div>
        </NavLink>
        <div>
          </div>
        </div>
      </div>

  );
}

export default Item;
