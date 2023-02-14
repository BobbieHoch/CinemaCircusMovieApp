import { createContext } from "react"; 
import { MovieContextModel } from "./MovieContextModel";


//CREATES MASTER CONTEXT pass in the starting value

const defaultValue: MovieContextModel= {
     movie:[],
    addMovie: ()=> void,
    removeMovie: ()=> void,


}
const MovieContext = createContext(defaultValue);

export default MovieContext;