import * as React from 'react';
import { useState, useEffect } from 'react';
import { Movie } from '../models/Movie';
import { GetMovieData } from '../Services/MovieService';
// import { MovieCard } from './MovieCard';
import { MovieResponse } from '../models/MovieTest';
import { MovieCard } from './MovieCard';


export function MovieList(){
  const [movieResponse, setMovieResponse] = useState<MovieResponse>();

  useEffect(() => {
    GetMovieData().then(data => setMovieResponse(data))
  }, []);

  return(
    <div className = "MovieList">
      {setMovieResponse !== undefined && movieResponse?.results.map((movie) => <MovieCard movie = {movie} key = {movie.id}/>)}
    </div>
  )
}


