import React, { Component } from 'react';
import PicList from './PicList';
import axios from 'axios';
import apiKey from '../config.js';

const key = apiKey;

class PicContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      loading: true,
      topic: this.props.topic
    };
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${this.state.topic}&per_page=32&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loading: false
        });
      })
      .catch(function (error) {
        <h3>Error fetching and parsing data:{ error }</h3>;
      });
  }

  render() {
    return(
      <div className="photo-container">
        <h2>{this.props.title}</h2>
          {
            (this.state.loading)
            ? <p>Data is loading...</p>
            : <PicList data={this.state.pics}/>
          }

      </div>
    );
  }
}

export default PicContainer;