import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";
import Bar from "../Components/Bar";
import Catalog from "../Components/Catalog";
import Footer from "../Components/Footer";
// import { randomAddress, searchAddress } from "../api";
// import axios from "axios";
import Loader from "../Components/Loader";
import { movieFilter } from "../filter.js";

const allMovies = [
  {
    title: "Szklana pułapka",
    director: "John McTiern",
    description:
      "Film powstał na podstawie powieści Nothing Lasts Forever Rodericka Thorpa. Film przedstawia historię nowojorskiego detektywa Johna McClane, który musi odbić wieżowiec japońskiej korporacji z rąk terrorystów.",
    imageurl:
      "https://d-pt.ppstatic.pl/kadry/k/r/1/92/cc/561fa1c0b1593_o,size,969x565,q,71,h,3d262e.jpg",
    actors: [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia",
      "Aleksander Godunow",
    ],
  },
  {
    title: "Avatar",
    director: "James Cameroon",
    description:
      "Główny bohater, Jake Sully to sparaliżowany od pasa w dół weteran. Po śmierci swego brata bliźniaka, Toma, i ze względu na takie samo DNA, otrzymuje propozycję pracy w korporacji RDA w ramach programu Avatar.",
    imageurl:
      "https://pm1.narvii.com/6470/59c30cbf64df95df9daec80a4b13521c1e217077_00.jpg",
    actors: ["Sam Worthington", "Zoë Saldaña", "Sigourney Weaver"],
  },
  {
    title: "Chłopaki nie płaczą",
    director: "Olaf Lubaszenko",
    description:
      "Głównym bohaterem filmu jest ambitny młody skrzypek Jakub Brenner (Maciej Stuhr). Mimo problemów na uczelni i porzucenia przez dziewczynę Weronikę, usiłuje pomóc swojemu nieśmiałemu przyjacielowi, Oskarowi.",
    imageurl:
      "https://lelum.pl/wp-content/uploads/2020/05/micha%C5%82-milowicz.jpg",
    actors: ["Cezary Pazura", "Maciej Stuhr", "Michał Milowicz", "Anna Mucha"],
  },
  {
    title: "Pętla",
    director: "Patryk Vega",
    description:
      "Losy polskiego policjanta przypadkowo łączą się z ukraińskimi braćmi. Wspólnie przejmują dom publiczny, w którym umieszczają kamery, a następnie gromadzą materiały do szantażu.",
    imageurl:
      "https://img.csfd.cz/files/images/film/photos/164/747/164747964_61fe79.jpg?w370h370",
    actors: ["Antoni Królikowski", "Katarzyna Warnke", "Piotr Stramowski"],
  },
  {
    title: "Mechaniczna Pomarańcza",
    director: "Stanley Kubrick",
    description:
      "Akcja filmu rozgrywa się w nieokreślonym czasie w Wielkiej Brytanii. Obraz opowiada historię Alexa DeLarge, inteligentnego człowieka z dobrej rodziny, miłośnika muzyki poważnej, a zarazem przestępcy, gwałciciela i zbrodniarza.",
    imageurl:
      "https://i2.wp.com/oldcamera.pl/wp-content/uploads/2020/07/mechaniczna-pomarancza1.jpg?fit=900%2C508&ssl=1",
    actors: ["Malcolm McDowell", "Warren Clarke", "Michael Bates"],
  },
  {
    title: "Interstellar",
    director: "Chrostopher Nolan",
    description:
      "Fabuła produkcji skupiona jest wokół grupy naukowców NASA, którzy odkrywają tunel czasoprzestrzenny pozwalający na odbycie podróży międzygwiezdnej.",
    imageurl:
      "https://i0.wp.com/www.cinefilos.it/wp-content/uploads/2018/08/interstellar.jpg?fit=1920%2C1037&ssl=1",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Bill Irwin",
    ],
  },
  {
    title: "Pewnego razu w Hollywood",
    director: "Quentin Tarantino",
    description:
      "Film opowiada historię aktora Ricka Daltona oraz jego dublera Cliffa Bootha. Dalton jest gwiazdą telewizyjną, jednak jego kariera aktorska staje na skraju załamania. Obawiając się jej końca podejmuje on desperackie kroki.",
    imageurl: "https://i.ytimg.com/vi/RtccvkeImfo/maxresdefault.jpg",
    actors: ["Leonardo DiCaprio", "Brad Pitt", "Al Pacino"],
  },
  {
    title: "Kevin sam w domu",
    director: "Chris Columbus",
    description:
      "Z powodu porannego pośpiechu wywołanego możliwością spóźnienia się na samolot do Francji rodzina poleciała bez Kevina, który został sam w domu. Tymczasem domem, w którym mieszka chłopiec, zaczynają interesować się włamywacze.",
    imageurl:
      "https://webprojektor.pl/wp-content/uploads/2019/12/Kevin-sam-w-domu.jpg",
    actors: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
  },
  {
    title: "Szybcy i wściekli",
    director: "Rob Cohen",
    description:
      "Opowieść o gangach, które rywalizują o prymat, ścigając się na ulicach miast przerobionymi samochodami, najczęściej produkcji japońskiej. Są to wyścigi o duże pieniądze. Gangi podejrzewane są także o serię porwań ciężarówek.",
    imageurl:
      "https://film.pinbook.pl/storage/article/9OWRxN4CJwqCIDqoTpXUU0LLKh154v8OpFWyA9sL.jpeg",
    actors: ["Vin Diesel", "Paul Walker", "Jordana Brewster"],
  },
  {
    title: "Kill Bill",
    director: "Quentin Tarantino",
    description:
      "Beatrix Kiddo (przez większość pierwszej części nazywana Panną Młodą lub Czarną Mambą), szuka krwawej zemsty na Billu oraz członkach Plutonu Śmiercionośnych Żmij – grupy wyszkolonych morderców, do której wspólnie z Billem kiedyś należała.",
    imageurl: "https://wallpapercave.com/wp/wp1817617.jpg",
    actors: ["Uma Thurman", "David Carradine", "Lucy Liu"],
  },
  {
    title: "Gnijąca panna młoda",
    director: "Tim Burton",
    description:
      "Victor Van Dort szykuje się do zaaranżowanego przez rodziców ślubu z Victorią Everglot. Swoją przyszłą żonę widzi pierwszy raz dopiero przed próbą generalną ceremonii ślubnej. ",
    imageurl:
      "https://d-tm.ppstatic.pl/kadry/66/36/1ed84ae98f69d2d18668540c46bf.1000.jpg",
    actors: ["Helena Bonham Carter", "Johhny Deep"],
  },
  {
    title: "Helloween",
    director: "	John Carpenter",
    description:
      "Po piętnastu latach Michael Myers, przez Loomisa określony jako nic więcej niż czyste zło, ucieka z zakładu, kradnie samochód i powraca do Haddonfield. Zbliża się halloween. Loomis wie, dokąd podąża psychopata.",
    imageurl:
      "https://www.screengeek.net/wp-content/uploads/2019/07/halloween-movie-1.jpg",
    actors: [
      "Jamie Lee Curtis",
      "Donald Pleasence",
      "Nancy Kyes",
      "Kyle Richards",
    ],
  },
];

const MainPage = () => {
  const [searchWord, setSearchWord] = useState();
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
    // jeżeli searchWord isnieje to "strzelamy" pod adres searchAddress
    // a jeżeli nie to pod adres randomAddress
    // const url = searchWord ? `${searchAddress}${searchWord}` : randomAddress;
  //   // kod pobierania filów z API
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setMovies(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   setIsLoading(false);
  // }, [searchWord]);

  const saveUserWord = (data) => {
    setSearchWord(data);
  };

  // jeśli searchWord będzie istniała to przekazujemy do Catalog liste wyfiltrowaną
  // a jeżeli searchWord będzie puste przekażemy allMovies
  const movies2 = searchWord ? movieFilter(allMovies, searchWord) : allMovies;

  return (
    <>
      <Container>
        <Header title="Super katalog filmowy" />
        <Bar getUserWord={saveUserWord} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {movies2 ? (
              <>
                {movies2.length > 0 ? (
                  <Catalog movies={movies2} />
                ) : (
                  <div className="notfound">
                    <h4>Brak filmów spełniających krytaria</h4>
                  </div>
                )}
              </>
            ) : null}
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;