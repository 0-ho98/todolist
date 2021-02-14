import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Home from "./routes/Home";
<<<<<<< HEAD
import Registration from "./routes/Registration";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> f80cc4ec82eb1dff6874899ed26801f3005d846e
function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <Navigation/> */}
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
