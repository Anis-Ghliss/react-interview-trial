export const del = (id) => {
  return {
    type: "DELETE",
    id: id,
  };
};

export const like = (id) => {
  return {
    type: "LIKE",
    id: id,
  };
};

export const dislike = (id) => {
  return {
    type: "DISLIKE",
    id: id,
  };
};

export const setMovies = (payload) => {
  return {
    type: "SETMOVIES",
    payload: payload,
  };
};

export const filter = (payload) => {
  console.log("filter here", payload);
  return {
    type: "FILTER",
    payload: payload,
  };
};
