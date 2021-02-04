import React, { Component }from 'react';
import './index.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
// import flickrAPIKey from './config';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   NavLink
// } from "react-router-dom";

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query) => {
    axios.get(``)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    console.log(this.state.photos);
    return (
      <div>
        <SearchForm onSearch={this.performSearch} /> 
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <PhotoList data={this.state.photos} />
          }          
        </div>
      </div>
    );
  }
}

export default App;
