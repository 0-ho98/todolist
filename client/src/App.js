import React from 'react';
import {BrowserRouter, Switch ,Route, Link} from 'react-router-dom';
import Footer from './components/Footer';
import Home from "./routes/Home";
import Registration from "./routes/Registration";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Route path="/registration" component={Registration}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
