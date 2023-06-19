import React from "react";
import NavBar from "./NavBar"
import { useState } from "react";
import "./style.css";
import { moviesData } from "./MovieData";
import MovieList from "./MovieList";
import AddMovie from "./addMovies";
import { Route, Routes } from "react-router-dom";


function App() {
  const [movies, setMovies] = useState(moviesData);
  console.log(movies,"Movie");

  const addhandler=(newmovie)=>{
    setMovies([...movies,newmovie ])
  }
  return (
    <div className="wrapper">
      <MovieList movies={movies} />
      <AddMovie  addhandler={addhandler}/>
    </div>
  );
  
  return (
    <div className="App">

    <NavBar />
    <Routes>
    <Route path="/MovieList.js" element="<MovieList />" />
    <Route path="/MovieData.js" element='/MovieList.js' />
        </Routes>
      
    </div>
  )


  }



    export default App; 
