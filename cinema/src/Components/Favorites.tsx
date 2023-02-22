import * as React from 'react';
import { useContext } from 'react';
import { Card, CardText, CardTitle, NavLink } from 'reactstrap';
import MovieContext from '../context/MovieContext';
import { MovieCard } from './MovieCard';
import { Link} from "react-router-dom"

export function Favorites () {
  
  const {movie} = useContext(MovieContext);
  const {removeFavorite} = useContext(MovieContext);

  let baseImageURL = "https://image.tmdb.org/t/p/w154";
  
  return (
    <div className="Favorites">
      {(movie || [])?.map((movie, index) => (
        // <MovieCard movie = {movie} key = {movie.id}/>
        <Card className = "MovieCard" key={movie.id}>
        <img alt="movie poster" src={baseImageURL + movie.poster_path} />
        <CardTitle className = "CardTitle">{movie.title}</CardTitle>
        <CardText>{movie.overview}</CardText>
        <Link to={`/details/${movie.id}`}>
          <button>Details</button>
        </Link>
        <button onClick ={() => {removeFavorite(movie.id)}}>Remove from Favorites</button>
      </Card>
      ))}
    </div>
  );
}
