
 
import './App.css';
import MovieList from './Componentes/MovieList';
import NavBarApp from './Componentes/NavBarApp';
import React ,{ useState } from 'react';
import {MovieData} from './Componentes/MovieData';
import AddMovie from './Componentes/AddMovie';

function App() {
  const [movie, setMovie]=useState(MovieData);
  const [name, setName]=useState("");
  const [rate, setRate]=useState(0);


  return (
    <div className="App">
      
      <NavBarApp  nameSearch={name} setNameSearch={setName} 
        rateSearch={rate} setRateSearch={setRate}   />
      <MovieList movies={movie} nameSearch={name} rateSearch={rate} />
    <AddMovie movies={movie} setMovies={setMovie} />
    </div>
  );
}

export default App;
