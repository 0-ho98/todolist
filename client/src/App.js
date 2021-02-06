import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from "./routes/Home";
import Registration from "./routes/Registration";
function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/registration", "/login"]} component={Header}/>
      <Route exact path={["/registration", "/login"]} component={Navigation}/>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Route path="/registration" component={Registration}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
