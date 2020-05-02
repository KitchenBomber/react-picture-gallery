import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {

state ={
  pictures : []
}

  componentDidMount(){
    console.log('app loaded');
    //GET REQUEST
    this.getPictures();
  }

getPictures = () => {
  console.log('in getPictures');
  axios.get('/gallery')
      .then ( (response) => {
      console.log(response.data);
      this.setState({
        pictures: response.data
      })}).catch((err) => {
        console.log(err);
      })
}//GET request


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        // <p>{JSON.stringify( this.state )}</p> making sure the state was loading as expected.
        <GalleryList />
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
