import * as React from 'react';
import { useState, useEffect } from 'react';
import { GetMovieData } from '../Services/MovieService';
import { MovieResponse, Result } from '../models/MovieTest';
import { MovieCard } from './MovieCard';
import { SearchBar } from './SearchBar';



export function MovieList(){
  const [movieResponse, setMovieResponse] = useState<Result[]>();

function updateMovie(movies:Result[]){
  setMovieResponse(movies);
}

  return(
    <div className = "MovieList">
      <SearchBar updateMovie={updateMovie} />
      {setMovieResponse !== undefined && movieResponse?.map((movie) => <MovieCard movie = {movie} key = {movie.id}/>)}
    </div>
  )
}

