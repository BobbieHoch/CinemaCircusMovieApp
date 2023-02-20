import * as React from "react";
import { NavLink, Navigate } from "react-router-dom";

export function MovieDetails() {
  return (
    <div className="MovieDetails">
      <embed>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZL9fnVtz_lc"
          title="YouTube video player"
          frameBorder="0"
          data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </embed>
    </div>
  );
}
