import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
// import { movieAddress } from "../api";
// // import axios from "axios";
import Loader from "../Components/Loader";

const FilmPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const url = `${movieAddress}${movieId}`;
  // //   axios
  // //     .get(url)
  // //     .then((res) => {
  // //       setMovie(res.data);
  // //     })
  // //     .catch((error) => {
  // //       console.log(error);
  // //     });

  //   setIsLoading(false);
  // }, [movieId]);

  // console.log(movie);

  return (
    <Container>
      <Header title="Super katalog filmowy" />
      {isLoading ? (
        <Loader />
      ) : (
        <>{movie ? <h3 className="mt-3">{movie.title}</h3> : null}</>
      )}
    </Container>
  );
      };

export default FilmPage;