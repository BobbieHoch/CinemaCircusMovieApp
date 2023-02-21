import axios from "axios";
import { MovieResponse, Result } from "../models/MovieTest";

export function GetMovieData(): Promise<MovieResponse>  {
    return axios

    .get<MovieResponse>("https://api.themoviedb.org/3/movie/popular?api_key=52347ae3c2afc9c57260e9eff233ad3b&language=en-US&page=1")
    .then((response) => response.data);
}

export function getMovieBySearchTerm (term:string){
    return axios
    .get<MovieResponse>("https://api.themoviedb.org/3/search/movie", {params:{api_key:"52347ae3c2afc9c57260e9eff233ad3b", query:term}})
    .then((res) => res.data);
}
