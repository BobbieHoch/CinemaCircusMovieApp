import { ReactNode, useState } from "react";
import { Movie } from "../models/Movie";
import MovieContext from "./MovieContext";

interface IMovieContextProviderProps {
  children: ReactNode;
}

const MovieContextProvider = ({ children }: IMovieContextProviderProps) => {
  const [movie, setMovie] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    // setMovie([...movie, Movie]);
  };

  const removeFavorite = (id: string) => {
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
