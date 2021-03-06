import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
//GalleryList is where our image component GalleryItem is organized on the DOM

class App extends Component {

  state = {
    pictures: []
  }

  componentDidMount() {
    console.log('app loaded');
    //GET REQUEST
    this.getPictures();
  }

  getPictures = () => {
    console.log('in getPictures');
    axios.get('/gallery')
      .then((response) => {
        // console.log(response.data);
        this.setState({
          pictures: response.data
        })
      }).catch((err) => {
        console.log(err);
      })
  }//GET request


  //this needs to be the PUT route
likedPhoto = (picture) => {
  console.log("i like you too", picture.id);
  //axios call goes here
  axios.put(`/gallery/like/${picture.id}`)
  .then(response => {
    this.getPictures()
  }).catch(error => {
    console.log('Error tabulating Likes', error);
    })
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <div className="galleryWall">
          <GalleryList pictures={(this.state.pictures)} likedPhoto={this.likedPhoto}/>
        </div>
      </div>
    );//end return
  }//end render
}//end class

export default App;
