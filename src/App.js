import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FilmPage from "./Pages/FilmPage";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/movie/:movieId" component={FilmPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;