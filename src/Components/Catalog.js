import React from "react";
import FilmCard from "./FilmCard";

const Catalog = ({ movies }) => {
  return (
    <div className="catalog mt-4">
      <h4 className="catalog-title">Nasze zwierzęta</h4>
      <div className="card-container mt-3">
        {movies.map((movie, index) => (
          <FilmCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;