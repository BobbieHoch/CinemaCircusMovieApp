import { MovieResponse, Result } from "../models/MovieTest";

export interface MovieContextModel {
  movie: Result[];
  addFavorite: (movie: Result) => void;
  removeFavorite: (id: number) => void;
}
