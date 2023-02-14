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
    const addItem = (movie:Movie) => {
        setMovie([...Movie, movie]);

    }
    const removeItem = (id: string) => {
        setMovie(Movie.filter((x) => x.id !== id));
    }

    return (<MovieContext.Provider value={{
        Movie: Movie,
        addItem: addItem,
        removeItem: removeItem
    }}>{children}</MovieContext.Provider>);
    
    

}
export default MovieContextProvider