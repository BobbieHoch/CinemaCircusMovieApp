import * as React from 'react';

export function SearchBar () {
  return (
    <div className="SearchBar">
      <input type="text" placeholder='Search For A Movie' />
      <button type="submit">Submit</button>
    </div>
  );
}
