import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// director: "Bryan Singer"
// hasOriginalTitle: false
// id: 10
// origin: "biograficzny / dramat / muzyczny"
// original: "Bohemian Rhapsody"
// poster: "https://dorotkaphotos.blob.core.windows.net/moviephotos/010.jpg"
// short: "Porywająca opowieść o zespole Queen, jego muzyce i niezwykłym wokaliście Freddiem Mercurym (Rami Malek), który przełamując st..."
// title: "Bohemian Rhapsody"

const FilmCard = ({ movie }) => {
  return (
    <Card className="film-card">
      <Card.Img
        variant="top"
        src={movie.imageurl}
        alt="image"
        className="movie-img"
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", color: "darkblue" }}>
          {movie.gatunek}
        </Card.Title>
        <Card.Text style={{ fontSize: 14, color: "gray", marginTop: -5 }}>
          Klasyfikacja: {movie.klasyfikacja}
        </Card.Text>
        <Card.Text>{movie.description}</Card.Text>
        <Link to={`/movie/${movie.id}`}>
        <Button variant="warning">Cechy osobnika</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;