import React from 'react';
import { Switch, Route } from "react-router-dom"

import Home from "./pages/home/Home"
import Results from "./pages/results/Results"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/results"><Results /></Route>
      </Switch>
    </div>
  )
}


export default App;