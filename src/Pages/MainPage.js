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
    gatunek: "Tygrys Syberyjski",
    klasyfikacja: "Ssak",
    // description:
    //   "Film powstał na podstawie powieści Nothing Lasts Forever Rodericka Thorpa. Film przedstawia historię nowojorskiego detektywa Johna McClane, który musi odbić wieżowiec japońskiej korporacji z rąk terrorystów.",
    imageurl:
      "https://bi.im-g.pl/im/8d/96/13/z20537997IBG,Mlody-tygrys-syberyjski-na-wybiegu.jpg",
    actors: [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia",
      "Aleksander Godunow",
    ],
  },
  {
    gatunek: "Słoń afrykański",
    klasyfikacja: "Ssak",
    // description:
    //   "Główny bohater, Jake Sully to sparaliżowany od pasa w dół weteran. Po śmierci swego brata bliźniaka, Toma, i ze względu na takie samo DNA, otrzymuje propozycję pracy w korporacji RDA w ramach programu Avatar.",
    imageurl:
      "https://images.hive.blog/0x0/https://steemitimages.com/DQmWmKxUg81CEz1xTwrtei2K51kvwUoGsmjJsfUaYu7259e/Savannah-Elephant-African-Bush-Elephant-Africa-114543.jpg",
    actors: ["Sam Worthington", "Zoë Saldaña", "Sigourney Weaver"],
  },
  {
    gatunek: "Żarłacz biały (rekin ludojad)",
    klasyfikacja: "Ryba",
    // description:
    //   "Głównym bohaterem filmu jest ambitny młody skrzypek Jakub Brenner (Maciej Stuhr). Mimo problemów na uczelni i porzucenia przez dziewczynę Weronikę, usiłuje pomóc swojemu nieśmiałemu przyjacielowi, Oskarowi.",
    imageurl:
      "https://i.gremicdn.pl/image/free/a12787cdc05ab77aec7707634c26db3e/?t=resize:fill:1200:716,enlarge:1",
    actors: ["Cezary Pazura", "Maciej Stuhr", "Michał Milowicz", "Anna Mucha"],
  },
  {
    gatunek: "Rekin młot",
    klasyfikacja: "Ryba",
    // description:
    //   "Losy polskiego policjanta przypadkowo łączą się z ukraińskimi braćmi. Wspólnie przejmują dom publiczny, w którym umieszczają kamery, a następnie gromadzą materiały do szantażu.",
    imageurl:
      "https://zwierzetainformacje.pl/wp-content/uploads/2016/08/rekin-m%C5%82ot-563x353.jpg",
    actors: ["Antoni Królikowski", "Katarzyna Warnke", "Piotr Stramowski"],
  },
  {
    gatunek: "Pingwiny",
    klasyfikacja: "Ptaki",
    // description:
    //   "Akcja filmu rozgrywa się w nieokreślonym czasie w Wielkiej Brytanii. Obraz opowiada historię Alexa DeLarge, inteligentnego człowieka z dobrej rodziny, miłośnika muzyki poważnej, a zarazem przestępcy, gwałciciela i zbrodniarza.",
    imageurl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Emperor_penguin.jpg",
    actors: ["Malcolm McDowell", "Warren Clarke", "Michael Bates"],
  },
  {
    gatunek: "Kangur",
    klasyfikacja: "Ssak",
    // description:
    //   "Fabuła produkcji skupiona jest wokół grupy naukowców NASA, którzy odkrywają tunel czasoprzestrzenny pozwalający na odbycie podróży międzygwiezdnej.",
    imageurl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Eastern_Grey_Kangaroo_Young_Waiting.JPG/1024px-Eastern_Grey_Kangaroo_Young_Waiting.JPG",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Bill Irwin",
    ],
  },
  {
    gatunek: "Żyrafa",
    klasyfikacja: "Ssak",
    // description:
    //   "Film opowiada historię aktora Ricka Daltona oraz jego dublera Cliffa Bootha. Dalton jest gwiazdą telewizyjną, jednak jego kariera aktorska staje na skraju załamania. Obawiając się jej końca podejmuje on desperackie kroki.",
    imageurl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Rothschilds_giraffe_at_paignton_arp.jpg",
    actors: ["Leonardo DiCaprio", "Brad Pitt", "Al Pacino"],
  },
  {
    gatunek: "Goryl",
    klasyfikacja: "Ssak",
    // description:
    //   "Z powodu porannego pośpiechu wywołanego możliwością spóźnienia się na samolot do Francji rodzina poleciała bez Kevina, który został sam w domu. Tymczasem domem, w którym mieszka chłopiec, zaczynają interesować się włamywacze.",
    imageurl:
      "https://fajnepodroze.pl/wp-content/uploads/2020/03/goryl.jpg",
    actors: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
  },
  {
    gatunek: "Wilk Szary",
    klasyfikacja: "Ssak",
    // description:
    //   "Opowieść o gangach, które rywalizują o prymat, ścigając się na ulicach miast przerobionymi samochodami, najczęściej produkcji japońskiej. Są to wyścigi o duże pieniądze. Gangi podejrzewane są także o serię porwań ciężarówek.",
    imageurl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/240px-Canis_lupus_265b.jpg",
    actors: ["Vin Diesel", "Paul Walker", "Jordana Brewster"],
  },
  {
    gatunek: "Krokodyl różańcowy",
    klasyfikacja: "Gad",
    // description:
    //   "Beatrix Kiddo (przez większość pierwszej części nazywana Panną Młodą lub Czarną Mambą), szuka krwawej zemsty na Billu oraz członkach Plutonu Śmiercionośnych Żmij – grupy wyszkolonych morderców, do której wspólnie z Billem kiedyś należała.",
    imageurl: "https://naukawpolsce.pl/sites/default/files/styles/strona_glowna_slider_750x420/public/201710/15229565_15229442.jpg?itok=JsrFnMEx",
    actors: ["Uma Thurman", "David Carradine", "Lucy Liu"],
  },
  {
    gatunek: "Lew afrykański",
    klasyfikacja: "Ssak",
    // description:
    //   "Victor Van Dort szykuje się do zaaranżowanego przez rodziców ślubu z Victorią Everglot. Swoją przyszłą żonę widzi pierwszy raz dopiero przed próbą generalną ceremonii ślubnej. ",
    imageurl:
      "https://zwierzetainformacje.pl/wp-content/uploads/2016/08/lew-afryka%C5%84ski-e1470653058578.jpg",
    actors: ["Helena Bonham Carter", "Johhny Deep"],
  },
  {
    gatunek: "Waran z Komodo",
    klasyfikacja: "Gad",
    // description:
    //   "Po piętnastu latach Michael Myers, przez Loomisa określony jako nic więcej niż czyste zło, ucieka z zakładu, kradnie samochód i powraca do Haddonfield. Zbliża się halloween. Loomis wie, dokąd podąża psychopata.",
    imageurl:
      "https://www.national-geographic.pl/media/cache/slider_big/uploads/media/default/0014/36/waran-z-komodo.jpeg",
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
                    <h4>Niestety w naszym zoo nie znajdziemy tych gatunków :(</h4>
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