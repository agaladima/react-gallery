import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import 'whatwg-fetch';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import PicList from './Components/PicList';
import Header from './Components/Header';

// App components
import apiKey from './config.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      flickr: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'baskeball') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&extras=url_o&per_page=25&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          flickr: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.flickr);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Header />
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PicList data={this.state.flickr} />
          }
        </div>
      </BrowserRouter>
      
    );
  }
}


