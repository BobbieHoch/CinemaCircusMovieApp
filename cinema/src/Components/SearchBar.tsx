import { SERVFAIL } from "dns";
import * as React from "react";
import { useState, useEffect } from "react";
import { MovieResponse, Result } from "../models/MovieTest";

export function SearchBar() {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<number[]>();
  const [voteAverage, setVoteAverage] = useState<number>();
  const [movie, setMovie] = useState<Result[]>([]);
  
  useEffect(() => {}, [title, genre, voteAverage]); // const [filters, setFilters] = useState<string[]>(["Title", "Genre", "Rating"]);

  // function showFilters (filters:string) : void {
  //   setFilters([...filters, filters])
  // }

  return (
    <div className="SearchBar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTitle(title);
          setGenre(genre);
          setVoteAverage(voteAverage);
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <button>Filter(s)</button>
      </form>
    </div>
  );
}
