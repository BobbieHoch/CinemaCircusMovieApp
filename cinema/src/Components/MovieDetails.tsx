import * as React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { MovieResponse, Result } from "../models/MovieTest";
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { MovieList } from "./MovieList";
import MovieContext from "../context/MovieContext";


export function MovieDetails() {



  const [movie, setMovie] = useState<Result>();

  
  const {id} = useParams();

  const baseMovieDetailsURL = "https://api.themoviedb.org/3/movie/"
  const endingMovieDetailsURL = "?api_key=a2b87480a083e734d8f2d45caac145ba&language=en-US"


  useEffect(() => {
    axios.get(`${baseMovieDetailsURL}${id}${endingMovieDetailsURL}`)
    .then(res => {setMovie(res.data)})
  }, [id])

  let baseImageURL = "https://image.tmdb.org/t/p/w154";

  const {addFavorite, removeFavorite} = useContext(MovieContext);

  const [disable, setDisable] = React.useState(false);

  return (
    <div>
      {movie !== undefined && 
      <div className = "MovieDetails">
        <section className = "DetailsPoster">
          <img alt="movie poster" src={baseImageURL + movie?.poster_path} />
        </section>
        <section className = "DetailsInfo">
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
          <p>Average Rating: {movie?.vote_average}</p>
        <p>Release Date: {movie?.release_date}</p>
        <button disabled = {disable} onClick ={() => {addFavorite(movie); setDisable(true)}}>Add To Favorites</button>
        </section>
      </div>
    }

    </div>


    // <div className="MovieDetails">
    //   <embed>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/ZL9fnVtz_lc"
    //       title="YouTube video player"
    //       frameBorder="0"
    //       data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       allowFullScreen
    //     ></iframe>
    //   </embed>
    // </div>
  );
}
