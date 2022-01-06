import React from "react";
import { Container } from "react-bootstrap";
// import Audio from "../images/audio.svg";

const Loader = () => {
  return (
    <Container>
      <div className="loader">
        <div className="loader__container">
          <img src={Audio} alt="Loader" />
          <h6>Trwa ładowanie filmów ...</h6>
        </div>
      </div>
    </Container>
  );
};

export default Loader;