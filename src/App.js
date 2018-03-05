import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import 'whatwg-fetch';
import './App.css';

// App components
import SearchForm from './Components/SearchForm';
import SearchResults from './Components/SearchForm';
import Header from './Components/Header';
import Home from './Components/Home';
import NoPics from './Components/NoPics';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Computers from './Components/Computers';
import PicContainer from './Components/PicContainer';
import PicList from './Components/PicList';

class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>	
          	<Route exact path='/' render={ ()=> <Redirect to={"/search"} /> } />
            <Route exact path='/search' component={SearchForm} />
            <Route path='/cats' component={Cats} />
            <Route path='/dogs' component={Dogs} />
            <Route path='/computers' component={Computers} />
            <Route path='search/:topic' component={SearchResults} />
            <PicContainer data={SearchResults} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
