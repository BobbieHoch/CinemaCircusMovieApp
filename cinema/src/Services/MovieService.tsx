import axios from "axios";

export async function searchMoviesByKeyword(): Promise<Result> {
    const response = await axios.get(
        "https://api.themoviedb.org/3/search/keyword?api_key=52347ae3c2afc9c57260e9eff233ad3b&language=en-US&page=1&include_adult=false"
    );
    return response.data.results;
}

export async function getMoviesByGenre(): Promise<Result> {
    const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=52347ae3c2afc9c57260e9eff233ad3b&language=en-US&page=1&include_adult=false"
    );
    return response.data.results;
}

export async function getMoviesByRating(): Promise<Result> {
    const response = await axios.get(
        "https://api.themoviedb.org/3/search/vote_average?api_key=52347ae3c2afc9c57260e9eff233ad3anguage=en-US&page=1&include_adult=false"
    );
    return response.data.results;
}
