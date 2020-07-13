import React from 'react'
import TvShow from './Item'

function Tvshows({tvshows}) {

        return(
            <div>
            <h2 style={{marginLeft:'25px'}}>POPULAR TV SHOWS</h2>
            <div className="movies-container">
                {tvshows.map(tvshow => {
                    return(
                        <TvShow
                            poster={tvshow["poster_path"]}
                            id={tvshow["id"]}
                            title={tvshow["original_name"]}
                            date={tvshow["first_air_date"]}
                            type={"tv"}
                            />
                    )
                })}
            </div>
            </div>

        )

}
export default Tvshows