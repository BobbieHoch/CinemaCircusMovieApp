import * as React from 'react';
import { useState, useEffect } from 'react';
import { MovieResponse } from '../models/Movie';
import { GetMovieData } from '../Services/MovieService';
import { MovieCard } from './MovieCard';

export function MovieList () {
  const [MovieResponse, setMovieResponse] = useState<MovieResponse>();
  useEffect(() => {
    GetMovieData().then(data => setMovieResponse(data))
  }, []);

  return (
    <div className="MovieList">
      {MovieResponse !== undefined && MovieResponse.results.map((movie)=><MovieCard/>)}
    </div>
  );
}
