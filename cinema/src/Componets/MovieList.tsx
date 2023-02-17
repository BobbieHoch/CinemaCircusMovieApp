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
      {setMovieResponse !== undefined && movieResponse?.results.map((movie) => <MovieCard movie = {movie}/>)}
    </div>
  )
}




// export function MovieList () {
//   const [moviesResponse, setMovieResponse] = useState<MovieResponse>();
//   useEffect(() => {
//     GetMovieData().then(data => setMovieResponse(data))
//   }, []);

// useEffect(() => {
//   console.log(moviesResponse);
// }, [moviesResponse]);


// let results = moviesResponse?.results;

// // let baseImageURL = "https://image.tmdb.org/t/p/original"
  
// // let displayResults = results?.map((movie) =>
// // <ul>
// //   <li>{baseImageURL}{movie.poster_path}</li>
// //   <li>{movie.title}</li>
// //   <li>{movie.overview}</li>
// //   <li>Genre</li>
// //   <li>Rating{movie.vote_average}</li>
// // </ul>
// // )


//   return (
//     <div className="MovieList">
//       <div>MovieList</div>
//       {moviesResponse !== undefined && moviesResponse.results.map((movie) => <MovieCard movie = {movie}/>)}
//     </div>
//   );
// }
