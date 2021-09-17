import { movies$ } from "../data/movies";

export const getMovies = async () => {
  const movies = await movies$;
  console.log(movies);
  return movies;
};
