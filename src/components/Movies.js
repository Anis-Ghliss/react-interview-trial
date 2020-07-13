import React from 'react'

import MovieItem from './Item'

function Movie({movies}) {

    return(
        <div>
        <h2 style={{marginLeft:'25px'}}>POPULAR MOVIES</h2>
        <div className="movies-container">

            {movies.map(movie => {
                return(
                    <MovieItem
                        poster={ movie["poster_path"]}
                        id={movie["id"]}
                        title={movie["title"]}
                        date={movie["release_date"]}
                        plot={movie["overview"]}
                        type = {"movie"}
                        />
                )
            })}
        </div>
        </div>
    )
}
export default Movie