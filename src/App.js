import React, { useCallback, useEffect, useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./App.css";
import { setMovies } from "./redux/actions";
import Movies from "./pages/movies/Movies";
import { getMovies } from "./api/getMovies";
import { useDispatch } from "react-redux";
import Nav from "./components/nav/Nave";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies()
      .then((data) => {
        console.log("someting");
        dispatch(setMovies(data));
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading movies ...</h1>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Movies />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
