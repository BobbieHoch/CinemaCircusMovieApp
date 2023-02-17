import * as React from 'react';
import { useState } from 'react';

export function SearchBar () {

  const [filters, setFilters] = useState<string[]>(["Title", "Genre", "Rating"]);

  // function showFilters (filters:string) : void {
  //   setFilters([...filters, filters])
  // }

  return (
    <div className="SearchBar">
      <input type="search" placeholder='Search For A Movie' />
      <button type="submit">Submit</button>
      <button>Filter(s)</button>
    </div>
  );
}
