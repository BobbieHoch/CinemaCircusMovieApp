import { useState, useEffect } from "react";
import { Movie } from "../models/Movie";
import { GetMovieData } from "../Services/MovieService";

// export function MovieCard() {
//   const [movies, setMovies] = useState<Movie>([]);
  
  
//   useEffect(() => {
//     GetMovieData().then(data => setMovies(data))
//   }, []);
  

//   return( 
//   <div>
//     {movies?.map(() => <MovieCard />)}
//   </div>
//   );
// }
