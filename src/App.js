import React,{useState,useEffect} from 'react';
import './App.css';
import Movie from './components/Movies'
import Tvshow from './components/TvShows'
import Nav from './components/Nave'
import Details from './components/Details'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {

  const [movies,setMovies] = useState([])
  const [tvShows,setTvShows] = useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=9d53106069f72bac07db98c4a220b731")
      .then( response => response.json())
      .then(data => {
        setMovies(data["results"])
      })
      .catch(console.log())

    fetch("https://api.themoviedb.org/3/tv/popular?api_key=9d53106069f72bac07db98c4a220b731")
    .then( response => response.json())
      .then(data => {
        setTvShows(data["results"])
      })
      .catch(console.log())
    },


  [])


  return (
  <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" render={ (props) => ( <Movie {...props} movies={ movies} /> ) }/>
        <Route exact path="/tvshows" render={ (props) => ( <Tvshow {...props} tvshows={ tvShows} /> ) }/>
        <Route exact path='/details/:id/:type' component={ Details}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
