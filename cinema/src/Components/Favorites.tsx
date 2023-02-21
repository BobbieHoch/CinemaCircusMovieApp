import * as React from 'react';
import { useContext } from 'react';
import { Card, CardText, CardTitle, NavLink } from 'reactstrap';
import MovieContext from '../context/MovieContext';

export function Favorites () {
  
  const {movie} = useContext(MovieContext);
  const {removeFavorite} = useContext(MovieContext);

  let baseImageURL = "https://image.tmdb.org/t/p/w154";
  
  return (
    <div className="Favorites">
      {(movie || [])?.map((movie, index) => (
        <Card>
        <img alt="movie poster" src={baseImageURL + movie.poster_path} />
        <CardTitle>{movie.title}</CardTitle>
        <CardText>{movie.overview}</CardText>
        <NavLink to={`/details/${movie.id}`}>
          <button>Details</button>
        </NavLink>
        <button onClick ={() => {removeFavorite(movie.id)}}>Remove from Favorites</button>
      </Card>
      ))}
    </div>
  );
}
