import { SERVFAIL } from "dns";
import * as React from "react";
import { useState, useEffect } from "react";
import { MovieResponse, Result } from "../models/MovieTest";
import { getMovieBySearchTerm } from "../Services/MovieService";

interface ISearchBarProps {
  updateMovie: Function
}


export function SearchBar(props:ISearchBarProps) {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<number[]>();
  const [voteAverage, setVoteAverage] = useState<number>();
  const [movie, setMovie] = useState<Result[]>([]);
  const [query, setQuery] = useState("");

  function onSubmit (e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getMovieBySearchTerm(title).then(res => props.updateMovie(res.results))
  }
  



  return (
    <div className="SearchBar">
      <form
      onSubmit={onSubmit}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button>Filter(s)</button>
      </form>
    </div>
  );
}
