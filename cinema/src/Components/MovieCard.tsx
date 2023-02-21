import { MovieResponse, Result } from "../models/MovieTest";
import { Card, CardBody, CardText, CardFooter, CardTitle, Alert } from "reactstrap";
import { NavLink, Navigate } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";

interface IMovieCardProps {
  movie: Result;
}
export function MovieCard(props: IMovieCardProps) {
  let movieInfo = props.movie;

  let baseImageURL = "https://image.tmdb.org/t/p/w154";

  const {addFavorite, removeFavorite} = useContext(MovieContext);

  // function addFavorite(movie: any): void {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <div className="MovieCard">
      <Card>
        <img alt="movie poster" src={baseImageURL + movieInfo.poster_path} />
        <CardTitle>{movieInfo.title}</CardTitle>
        <CardText>{movieInfo.overview}</CardText>
        <NavLink to={`/details/${movieInfo.id}`}>
          <button>Details</button>
        </NavLink>
        <button onClick ={() => {addFavorite(movieInfo)}}>Add To Favorites</button>
      </Card>
    </div>
  );
}
