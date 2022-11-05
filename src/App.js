import React from 'react';
import { Switch, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Results from "./pages/results/Results"
import Recipe from "./pages/recipe/Recipe.js"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/results"><Results /></Route>
        <Route path="/recipe/:id"><Recipe /></Route>
      </Switch>
    </div>
  )
}


export default App;