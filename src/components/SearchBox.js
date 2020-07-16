import React, { useState, Fragment } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import Apikey from "../apkiKeys";
import { NavLink } from "react-router-dom";


function SearchBox() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${Apikey.TMDBKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const options = data["results"].map((i) => ({
          title: i.title,
          id: i.id,
          poster: i.poster_path,
          type:i.media_type
        }));
        setOptions(options);
        setIsLoading(false);
      });
  };

  return (
    //   <form className="wrap">
    //   <div className="floating-label-group">
    //     <input
    //       type="text"
    //       id="username"
    //       className="form-control"
    //       autoComplete
    //       autoFocus
    //       required
    //     />
    //
    //   </div>
    // </form>
    <form action="" className="wrap">
      <AsyncTypeahead
        id="async-example"
        isLoading={isLoading}
        labelKey="title"
        className="search-input"
        minLength={3}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for a movie or a tv show  ... "
        renderMenuItemChildren={(option, props) => (
          <Fragment>
            <NavLink to={"/details/"+option.id+"/"+option.type}>
              <span className="search-item">{option.title}</span><br/>
            </NavLink>
          </Fragment>
        )}
      />
    </form>
  );
}

export default SearchBox;
