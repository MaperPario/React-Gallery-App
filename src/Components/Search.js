import React, { Component } from 'react';
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import Nav from './Nav';
import axios from 'axios';
import flickrAPIKey from '../config';

//Main page component, handling state and passing throughout application;

class Search extends Component {
  
  //creating state for photos and loading screen.
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

  //invoke immediately after mount, perform the search.
  componentDidMount() {
    this.performSearch();
  }

  //called after new props are introduced, updates URL
  componentDidUpdate(newProps) {
    if (newProps.match.params.searchText !== this.props.match.params.searchText) {
      this.performSearch();
    }
  }

  //adds searchText to the end of the URL
  changeRouteWithSearch = (searchText) => {
    this.props.history.push(`/search/${searchText}`)
  }

  //perform search function, calling Flickr API, setting state of photos based off the query, and catches errors.
  performSearch = () => {
    const query = this.props.match.params.searchText;
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  //main render; SearchForm, Nav Buttons, PhotoList.
  render() {
    return(
      <div className="container">
        <SearchForm onSearch={this.changeRouteWithSearch} />
        <Nav />
        <div className="photo-container">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <PhotoList data={this.state.photos} query={this.props.match.params.searchText} />
          }
        </div>
      </div>
    )
  }
}

export default Search;