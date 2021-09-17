export const filtredMovies = (state = [], action) => {
  switch (action.type) {
    case "SETMOVIES":
      console.log("here", action.payload);
      return [...state, action.payload];
    case "FILTER":
      console.log("here filter", action.payload);
      if (action.payload.lenght !== 0) {
        const filtredMovies = state[0].filter((item) => {
          return action.payload.includes(item.category);
        });
        return [filtredMovies];
      } else {
        return [];
      }

    default:
      return state;
  }
};
