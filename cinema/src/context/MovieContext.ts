import { createContext } from "react"; 
import { MovieContextModel } from "./MovieContextModel";


//CREATES MASTER CONTEXT pass in the starting value

const defaultValue: MovieContextModel= {
    id:()=> {},
    title: ()=> {},
    synopsis:()=> {},
    rating: ()=> {},
    genre: ()=> {},
    image:()=> {}
}
const MovieContext = createContext(defaultValue);

export default MovieContext;