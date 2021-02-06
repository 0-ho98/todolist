import React from 'react';
import Main from '../components/Main';
// import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Login from '../routes/Login';



const Home = () => {
    return(
        <div>
            <Main/>
        </div>
    )
}

// class Home extends React.Component{
//     render(){
//         // const {location: {pathname} } =this.props;
//         // console.log(pathname);
//         return (
//             <BrowserRouter>
//             <Header pathname= {pathname}/>
//             <Switch>
//                 <Route path="/login" component={Login}/>
//             </Switch>
//             </BrowserRouter>
//         )
//     }
// }
export default Home;