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

// App components
import apiKey from './config.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      flickr: []
    };
  }

  componentDidMount() {
    // fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=25&format=json&nojsoncallback=1`)
    // .then(response => response.json())
    // .then(responseData => {
    //   this.setState({ flickr: responseData.photos.photo });
    // })
    // .catch(error => {
    //   console.log('Error fetching and parsing data', error);
    // });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=25&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ flickr: response.data.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.flickr);
    return (
      <div className="container">
        <SearchForm />
        <PicList data={this.state.flickr} />
      </div>
    );
  }
}


