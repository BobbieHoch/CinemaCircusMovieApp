import { useState, useEffect, useContext } from "react";
import { Movie } from "../models/Movie";
import { MovieResponse, Result } from "../models/MovieTest";
import { GetMovieData } from "../Services/MovieService";


interface IMovieCardProps{
    movie: Result
}
export function MovieCard(props:IMovieCardProps) {


let movieInfo = props.movie

let baseImageURL = "https://image.tmdb.org/t/p/original"

  return(
    <div className = "MovieCard">
        <ul>
       <li>{baseImageURL}{movieInfo.poster_path}</li>
       <li>{movieInfo.title}</li>
       <li>{movieInfo.overview}</li>
       <li>Genre</li>
       <li>Rating {movieInfo.vote_average}</li>
    </ul>

    </div>
  )
}
