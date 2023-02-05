import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
// import Home from "./components/pages/Home";
// import DefaultPage from "./components/pages/DefaultPage";
// import Recipes from "./components/pages/Recipes";
// import RecipeDetails from "./components/pages/RecipeDetails";

const Home = lazy(() =>
  import(
    /* webpackChunkName: "HomeChunk" */ "./components/pages/Home"
  )
);

const Recipes = lazy(() =>
  import(
    /* webpackChunkName: "RecipeChunk" */ "./components/pages/Recipes"
  )
);

const RecipeDetails = lazy(() =>
  import(
    /* webpackChunkName: "RecipeDetailChunk" */ "./components/pages/RecipeDetails"
  )
);

const DefaultPage = lazy(() =>
  import(
    /* webpackChunkName: "DefaultChunk" */ "./components/pages/DefaultPage"
  )
);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:recipe_id" component={RecipeDetails} />
          <Route component={DefaultPage} />
        </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
