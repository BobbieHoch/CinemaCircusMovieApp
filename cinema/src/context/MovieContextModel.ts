import { Movie } from "../models/Movie";


export interface MovieContextModel {
    movie: Movie[],
    addMovie:(movie:Movie)=> void,
    removeMovie: (movie:Movie)=> void
}