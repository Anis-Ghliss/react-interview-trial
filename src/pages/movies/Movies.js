import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions";
import Card from "../../components/card/Card";
import Select from "react-select";
import { getCategories, filtredData } from "../../utils/getCategories";
import { Button } from "../../components/buttons/Button";
function Movie() {
  const movies = useSelector((state) => state.movies[0]);
  const filtredMovies = useSelector((state) => state.filtredMovies[0]);
  const dispatcher = useDispatch();
  console.log("Im in movie", getCategories(movies));
  const arr = filtredMovies === [] ? movies : filtredMovies;
  return (
    <div>
      <h2 style={{ marginLeft: "25px" }}>POPULAR MOVIES</h2>
      <div className="movies-container">
        {arr.map((movie) => {
          console.log("sdfsdf", movie);
          return (
            <Card
              id={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
            />
          );
        })}
      </div>
      <Select
        isMulti
        name="categories"
        onChange={(e) => {
          console.log(e);
          dispatcher(filter(filtredData(e)));
        }}
        options={getCategories(movies)}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      <div
        style={{
          margin: "auto",
          width: "250px",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "25px",
        }}
      >
        <Button>Pres</Button>
        <Button onClick={() => {}}>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>Suiv</Button>
      </div>
    </div>
  );
}
export default Movie;
