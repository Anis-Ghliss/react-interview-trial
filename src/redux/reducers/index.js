import { combineReducers } from "redux";
import { movies } from "./movies";
import { filtredMovies } from "./filtredMovie";
export const rootReducer = combineReducers({
  movies,
  filtredMovies,
});
