import { Movie } from "../models/Movie";


export interface MovieContextModel {
    id: string,
    title: string,
    synopsis: string,
    rating: number,
    genre: string,
    image: string
}