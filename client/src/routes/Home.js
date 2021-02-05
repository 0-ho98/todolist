import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Header from '../components/Header';
import Login from '../routes/Login';
class Home extends React.Component{
    render(){
        const {location: {pathname} } =this.props;
        console.log(pathname);
        return (
            <BrowserRouter>
            <Header pathname= {pathname}/>
            <Switch>
                <Route path="/login" component={Login}/>
            </Switch>
            </BrowserRouter>
        )
    }
}
export default Home;