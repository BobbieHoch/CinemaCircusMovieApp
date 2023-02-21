import { MovieResponse, Result } from "../models/MovieTest";
import { Card, CardBody, CardText, CardFooter, CardTitle, Alert } from "reactstrap";
import { NavLink, Navigate } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import { useContext } from "react";
import React from "react";

interface IMovieCardProps {
  movie: Result;
}
export function MovieCard(props: IMovieCardProps) {
  let movieInfo = props.movie;

  let baseImageURL = "https://image.tmdb.org/t/p/w154";

  const {addFavorite, removeFavorite} = useContext(MovieContext);

  const [disable, setDisable] = React.useState(false);

  return (
    <div className="MovieCard">
      <Card>
        <img alt="movie poster" src={baseImageURL + movieInfo.poster_path} />
        <CardTitle>{movieInfo.title}</CardTitle>
        <CardText>{movieInfo.overview}</CardText>
        <NavLink to={`/details/${movieInfo.id}`}>
          <button>Details</button>
        </NavLink>
        <button disabled = {disable} onClick ={() => {addFavorite(movieInfo); setDisable(true)}}>Add To Favorites</button>
      </Card>
    </div>
  );
}
