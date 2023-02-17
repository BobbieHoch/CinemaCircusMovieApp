import { Movie } from "../models/Movie";

export interface MovieContextModel {
  movie: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
}
