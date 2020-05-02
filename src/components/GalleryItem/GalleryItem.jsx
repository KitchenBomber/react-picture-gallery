import React, { Component } from 'react';

//will need a handleChange or handle Click here

//will need a state here to store the number of times the button has been clicked


class GalleryItem extends Component{
    render(){
        const picture = this.props.picture;
        console.log('In GalleryItem', picture);
        return(
            <>
            <h1>Hi From GalleryItem</h1>
            <h2>{JSON.stringify(picture.path)}</h2>
            </>
        )
    }
}
// gallery item needs a button and needs to call one image out of the array.

export default GalleryItem