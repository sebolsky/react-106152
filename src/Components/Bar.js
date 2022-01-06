import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Bar = ({ getUserWord }) => {
  const [word, setWord] = useState("");

  const userTypedWord = (event) => {
    setWord(event.target.value);
  };

  const userClickedButton = () => {
    getUserWord(word);
  }

  return (
    <div className="bar mt-4">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Proszę podać tytuł filmu lub nazwisko reżysera bądź aktora"
          value={word}
          onChange={userTypedWord}
        />
        <Button variant="outline-primary" style={{ width: "150px" }} onClick={userClickedButton}>
          Szukaj
        </Button>
      </InputGroup>
    </div>
  );
};

export default Bar;