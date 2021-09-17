import { TiAttachmentOutline } from "react-icons/ti";

export const movies = (state = [], action) => {
  switch (action.type) {
    case "SETMOVIES":
      console.log("here", action.payload);
      return [...state, action.payload];
    case "DELETE":
      console.log("here", action);
      return [state[0].filter((item) => item.id !== action.id)];
    case "LIKE":
      console.log("here", action);
      const newMovie = state[0].map((item) =>
        item.id === action.id ? { ...item, likes: item.likes + 1 } : item
      );
      console.log("new movie", newMovie);
      return [newMovie];
    case "DISLIKE":
      console.log("here", action);
      const x = state[0].map((item) =>
        item.id === action.id ? { ...item, dislikes: item.dislikes + 1 } : item
      );
      console.log("new movie", x);
      return [x];

    default:
      return state;
  }
};
