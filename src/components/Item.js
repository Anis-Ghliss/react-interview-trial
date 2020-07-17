import React from 'react';
import NavLink from 'react-router-dom';

function Item(prop) {
  const link = `/details/${prop.id}/${prop.type}`;

  return (
    <div className="main-container">
      <div className="movie-item-container">
        <NavLink to={link} style={{ textDecoration: 'none' }}>
          <img
            className="movie-poster"
            src={
              prop.poster !== null
                ? `https://image.tmdb.org/t/p/w500${prop.poster}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1n9bfmCTHgCTIhuzQtWVf9KZqOFbF_GJkCw&usqp=CAU'
            }
            alt={prop.title}
          />
          <div className="info-details">
            <p className="movie-title">{prop.title}</p>
            <small className="movie-date"> Release Date : {prop.date}</small>
          </div>
        </NavLink>
        <div />
      </div>
    </div>
  );
}

export default Item;
