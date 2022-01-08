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
    description:
      "największy z podgatunków tygrysa azjatyckiego, drapieżnego ssaka z rodziny kotowatych. Porównywalne rozmiary osiąga jedynie tygrys bengalski (P. t. tigris). Zbliżony wielkością tygrys kaspijski (P. t. virgata) uznawany jest już za gatunek wymarły. Tygrys syberyjski to podgatunek o niskim poziomie zmienności genetycznej",
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
    description:
      " gatunek ssaka z rodziny słoniowatych (Elephantidae), największe współcześnie żyjące zwierzę lądowe. Wcześniej uznawany za jeden gatunek wraz ze słoniem leśnym (Loxodonta cyclotis). Zwierzę stadne, zamieszkuje afrykańską sawannę, lasy i stepy. W starożytności wykorzystywane jako zwierzęta bojowe.",
    imageurl:
      "https://images.hive.blog/0x0/https://steemitimages.com/DQmWmKxUg81CEz1xTwrtei2K51kvwUoGsmjJsfUaYu7259e/Savannah-Elephant-African-Bush-Elephant-Africa-114543.jpg",
    actors: ["Sam Worthington", "Zoë Saldaña", "Sigourney Weaver"],
  },
  {
    gatunek: "Żarłacz biały (rekin ludojad)",
    klasyfikacja: "Ryba",
    description:
      " gatunek ryby chrzęstnoszkieletowej z rodziny lamnowatych (Lamnidae), jedyny żyjący współcześnie przedstawiciel rodzaju Carcharodon, jeden z największych rekinów drapieżnych. Poławiany komercyjnie i sportowo.",
    imageurl:
      "https://i.gremicdn.pl/image/free/a12787cdc05ab77aec7707634c26db3e/?t=resize:fill:1200:716,enlarge:1",
    actors: ["Cezary Pazura", "Maciej Stuhr", "Michał Milowicz", "Anna Mucha"],
  },
  {
    gatunek: "Rekin młot",
    klasyfikacja: "Ryba",
    description:
      "gatunek morskiej ryby żarłaczokształtnej z rodziny młotowatych (Sphyrnidae). Posiada charakterystyczny kształt pyska przypominający młot, spłaszczony i poprzecznie rozciągnięty, bez wcięcia na środku przedniej krawędzi (stąd angielski epitet smooth – gładki).",
    imageurl:
      "https://zwierzetainformacje.pl/wp-content/uploads/2016/08/rekin-m%C5%82ot-563x353.jpg",
    actors: ["Antoni Królikowski", "Katarzyna Warnke", "Piotr Stramowski"],
  },
  {
    gatunek: "Pingwiny",
    klasyfikacja: "Ptaki",
    description:
      " rząd (Sphenisciformes) oraz rodzina (Spheniscidae) ptaków z infragromady ptaków neognatycznych (Neognathae).",
    imageurl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Emperor_penguin.jpg",
    actors: ["Malcolm McDowell", "Warren Clarke", "Michael Bates"],
  },
  {
    gatunek: "Kangur",
    klasyfikacja: "Ssak",
    description:
      " rodzaj ssaka z podrodziny kangurów (Macropodinae) w rodzinie kangurowatych (Macropodidae).",
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
    description:
      "afrykański ssak parzystokopytny z rodziny żyrafowatych, najwyższe zwierzę lądowe i największy z przeżuwaczy żyjących w czasach nowożytnych.",
    imageurl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Rothschilds_giraffe_at_paignton_arp.jpg",
    actors: ["Leonardo DiCaprio", "Brad Pitt", "Al Pacino"],
  },
  {
    gatunek: "Goryl",
    klasyfikacja: "Ssak",
    description:
      " rodzaj ssaka naczelnego z podrodziny Homininae w rodzinie człowiekowatych (Hominidae). Preferuje naziemny tryb życia, jest zwierzęciem roślinożernym, zamieszkuje lasy tropikalne w Afryce. Dzielone są na dwa gatunki i według nadal trwającej debaty (2007) do czterech lub pięciu podgatunków.",
    imageurl:
      "https://fajnepodroze.pl/wp-content/uploads/2020/03/goryl.jpg",
    actors: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
  },
  {
    gatunek: "Wilk Szary",
    klasyfikacja: "Ssak",
    description:
      " gatunek drapieżnego ssaka z rodziny psowatych (Canidae), zamieszkującego lasy, równiny, tereny bagienne oraz góry Eurazji i Ameryki Północnej. Gatunek o skłonnościach terytorialnych. Zwykle terytorium zajmowane przez watahę to 100–300 km²",
    imageurl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/240px-Canis_lupus_265b.jpg",
    actors: ["Vin Diesel", "Paul Walker", "Jordana Brewster"],
  },
  {
    gatunek: "Krokodyl różańcowy",
    klasyfikacja: "Gad",
    description:
      " gatunek gada z rodziny krokodyli właściwych (krokodylowatych). Jest największym współcześnie żyjącym gadem, a także największym drapieżnikiem na lądzie i rzekach całego świata.",
    imageurl: "https://cdnnpl1.img.sputniknews.com/img/07e5/02/03/13769722_157:0:1237:1080_1920x0_80_0_0_733afd1656d1086d0336aca5ee9d4b72.jpg",
    actors: ["Uma Thurman", "David Carradine", "Lucy Liu"],
  },
  {
    gatunek: "Lew afrykański",
    klasyfikacja: "Ssak",
    description:
      "gatunek mięsożernego ssaka lądowego z podrodziny panter (Pantherinae) w rodzinie kotowatych (Felidae), drugi po tygrysie – co do wielkości – wśród pięciu wielkich kotów.",
    imageurl:
      "https://zwierzetainformacje.pl/wp-content/uploads/2016/08/lew-afryka%C5%84ski-e1470653058578.jpg",
    actors: ["Helena Bonham Carter", "Johhny Deep"],
  },
  {
    gatunek: "Waran z Komodo",
    klasyfikacja: "Gad",
    description:
      "gatunek gada z rodziny waranów nazywany smokiem z Komodo. To największa współcześnie żyjąca jaszczurka. Odkryta w 1910 roku. Aby ją chronić, założono w 1980 r. Park Narodowy Komodo.",
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