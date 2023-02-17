import { createContext } from 'react';
import { MovieContextModel } from './MovieContextModel';

const defaultValue:MovieContextModel = {
movie: [],
addFavorite: () => {},
removeFavorite: () => []
}

const MovieContext = createContext(defaultValue);

export default MovieContext;
