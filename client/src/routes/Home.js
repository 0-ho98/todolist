import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../routes/Login';
class Home extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <Route path="/login" component={Header}/>
            <Switch>
                <Route path="/login" component={Login}/>
                {/* <Route path="/main" component={}/> */}
            </Switch>
            
            </BrowserRouter>
        )
    }
}
export default Home;