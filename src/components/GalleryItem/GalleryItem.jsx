import React, { Component } from 'react';

//will need a handleChange or handle Click here

//will need a state here to store the number of times the button has been clicked


class GalleryItem extends Component{
    render(){
        const picture = this.props.picture;
        console.log('In GalleryItem', picture);
        return(
            <div>
                <img key={picture.id} src={picture.path} alt={picture.description}></img>
                <div>
                    <h4>{picture.likes} people loved this photo</h4>
                    <button>I LOVE IT!</button>
                </div>

            </div>
            
        )
    }
}
// gallery item needs a button and needs to call one image out of the array.

export default GalleryItem