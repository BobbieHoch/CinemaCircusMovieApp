import { ReactNode, useState } from "react";
import { MovieResponse, Result } from "../models/MovieTest";
import MovieContext from "./MovieContext";

interface IMovieContextProviderProps {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: IMovieContextProviderProps) => {
  const [movieFavorites, setMovieFavorites] = useState<Result[]>([]);

  const addFavorite = (movie: Result) => {
    setMovieFavorites([...movieFavorites, movie]);
    console.log(movie)
  };

  const removeFavorite = (id: number) => {
    setMovieFavorites(movieFavorites.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        movie: movieFavorites,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
