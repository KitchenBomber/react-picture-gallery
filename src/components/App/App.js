import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


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
        console.log(response.data);
        this.setState({
          pictures: response.data
        })
      }).catch((err) => {
        console.log(err);
      })
  }//GET request

likedPhoto = (picture) => {
  console.log("i like you too", picture);
  picture.likes += 1;

}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
     
        <div>
          <GalleryList pictures={(this.state.pictures)} likedPhoto={this.likedPhoto}/>
        </div>
      </div>
    );//end return
  }//end render
}//end class

export default App;
