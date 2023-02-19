import { MovieResponse, Result } from "../models/MovieTest";
import { Card, CardBody, CardText, CardFooter, CardTitle } from "reactstrap";
import { NavLink, Navigate } from "react-router-dom";

interface IMovieCardProps {
  movie: Result;
}
export function MovieCard(props: IMovieCardProps) {
  let movieInfo = props.movie;

  let baseImageURL = "https://image.tmdb.org/t/p/w154";

  return (
    <div className="MovieCard">
      <Card>
        <img alt="movie poster" src={baseImageURL + movieInfo.poster_path} />
        <CardTitle>{movieInfo.title}</CardTitle>
        <CardText>{movieInfo.overview}</CardText>
        <NavLink to={`/details/${movieInfo.id}`}>
          <button>Details</button>
        </NavLink>
        <button>Add To Favorites</button>
      </Card>
    </div>
  );
}
