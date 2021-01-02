import React, { useState, useEffect } from 'react';
import Apikey from '../apkiKeys';

function nestedDataToString(nestedData) {
  const nestedArray = [];
  let resultString = 0;
  if (nestedData !== undefined) {
    nestedData.forEach((item) => {
      nestedArray.push(item.name);
    });
  }
  resultString = nestedArray.join(','); // array to string
  return resultString;
}

function Details(props) {
  const { id } = props.match.params;
  const { type } = props.match.params;
  const [data, setData] = useState({});
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${Apikey.TMDBKEY}&language=en-US`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data1) => {
        setData(data1);
      })
      .catch(console.log());
  }, [url]);
  console.log(`this is me${data.poster_path}`);
  return (
    <div className='details-container'>
      <div className='card'>
        <div className='poster'>
          <img
            src={
              data.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1n9bfmCTHgCTIhuzQtWVf9KZqOFbF_GJkCw&usqp=CAU'
            }
            className='image-poster'
            alt=''
          />
        </div>
        <div className='details'>
          {type === 'movie' ? (
            <InfoDetail
              name={data.title}
              tagline={data.tagline}
              plot={data.overview}
              genre={nestedDataToString(data.genres)}
              date={data.release_date}
              vote={data.vote_average}
              trailer={data.homepage}
            />
          ) : (
            <InfoDetail
              name={data.name}
              plot={data.overview}
              season={`Number of Seasons : ${data.number_of_seasons}`}
              genre={nestedDataToString(data.genres)}
              date={data.first_air_date}
              vote={data.vote_average}
              trailer={data.homepage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function InfoDetail(props) {
  return (
    <div>
      <h1 style={{ textTransform: 'uppercase' }}>{props.name}</h1>
      <h3 style={{ textTransform: 'uppercase', color: '#079E65' }}>
        {props.tagline}
      </h3>
      <h3 style={{ textTransform: 'uppercase', color: '#079E65' }}>
        {props.season}
      </h3>
      <p>{props.plot}</p>
      <h3 style={{ textTransform: 'uppercase', color: '#079E65' }}>
        {' '}
        GENRES : {props.genre}
      </h3>
      <h3 style={{ textTransform: 'uppercase', color: '#079E65' }}>
        Vote Average : {props.vote}/10
      </h3>
      <h5>
        <i style={{ opacity: '0.6' }}>Release Date : {props.date}</i>
      </h5>
      <button
        style={{
          color: 'white',
          textTransform: 'uppercase',
          backgroundColor: '#079E65',
          marginLeft: '340px',
          height: '30px',
          border: 'none',
          marginBottom: '8px',
        }}
      >
        <a
          href={props.trailer}
          style={{
            textDecoration: 'none',
            color: 'white',
            cursor: 'pointer',
            backgroundColor: '#079E65',
            marginBottom: '8px',
          }}
        >
          Home Page
        </a>
      </button>
    </div>
  );
}

export default Details;
