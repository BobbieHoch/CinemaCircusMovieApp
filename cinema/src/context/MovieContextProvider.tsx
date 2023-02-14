import { ReactNode, useState } from "react";
import { Movie} from "../models/Movie";
import MovieContext from "./MovieContext";

//takes in a ***Props node
interface IMovieContaxtProviderProps{
    children:ReactNode
}
//STATE FUNCTIONS DATA TO SHARE CHILDREN OPENS DOOR TO ALL IN APP.TSX
const MovieContextProvider = ({children}: IMovieContaxtProviderProps) => {
    const [Movie, setMovie] = useState<Movie[]>([]);
//implementation of functions set up 
    const addMovie = (movie:Movie) => {
        setMovie([...Movie, movie]);

    }
    const removeMovie = (id: string) => {
        setMovie(Movie.filter((x) => x.id !== id));
    }

    return (<MovieContext.Provider value={{
        movie: Movie,
        addMovie: addMovie,
        removeMovie: removeMovie
    }}>{children}</MovieContext.Provider>);
    
    

}
export default MovieContextProvider