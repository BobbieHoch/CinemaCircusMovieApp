import { Movie } from "../models/Movie";
import axios from "axios";

export function GetMovieData(): Promise<Movie> {
    return axios

    .get<Movie>("https://api.themoviedb.org/3/movie/550?api_key=52347ae3c2afc9c57260e9eff233ad3b")
    .then((response) => response.data);
}