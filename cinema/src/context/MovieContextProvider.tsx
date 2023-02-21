import { ReactNode, useState } from "react";
import { MovieResponse, Result } from "../models/MovieTest";
import MovieContext from "./MovieContext";

interface IMovieContextProviderProps {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: IMovieContextProviderProps) => {
  const [movie, setMovie] = useState<Result[]>([]);

  const addFavorite = (movie: Result) => {
    // setMovie([...movie, Movie]);
  };

  const removeFavorite = (id: number) => {
    setMovie(movie.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        movie: movie,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
