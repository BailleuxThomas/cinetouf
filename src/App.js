import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import Nav from "./components/molecules/Nav/Nav";
import Main from "./pages/Main/Main";
import Films from "./pages/Films/Films";
import Series from "./pages/Series/Series";
import Description_film from "./pages/Description_films/Description";
import Description_serie from "./pages/Description_series/Description";
import Global404 from "./pages/404/Global404";

const App = () => {
  return (
    <Router>
      <nav>
        <Nav />
      </nav>
      <Route>
        {({ location }) => {
          if (location.state && location.state.is404) {
            return <Global404 />;
          }

          return (
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route exact path="/films/">
                <Films />
              </Route>
              <Route exact path="/series/">
                <Series />
              </Route>
              <Route exact path="/description_film/:movieId">
                <Description_film />
              </Route>
              <Route exact path="/description_serie/:serieId">
                <Description_serie />
              </Route>
            </Switch>
          );
        }}
      </Route>
    </Router>
  );
};

export default App;
