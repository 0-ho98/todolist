import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from "./routes/Home";
import Registration from "./routes/Registration";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Route path="/registration" component={Registration}/>
    </BrowserRouter>
  );
}

export default App;
