import React, { Component } from 'react';

//will need a handleChange or handle Click here

//will need a state here to store the number of times the button has been clicked


class GalleryItem extends Component {
    state = {
        flipped: false
    }//flipped being true will trigger conditional logic to display the text description instead of the picture. as if the photo was turned over.

    handleClick = () => {
        this.setState({
            flipped: !this.state.flipped
        })
    }





    render() {
        const picture = this.props.picture;
        // console.log('In GalleryItem', picture);

        let imageOrText = <img src={picture.path} alt={picture.description} onClick={this.handleClick}></img>

        if (this.state.flipped) {
            imageOrText = (
                <div>
                <br></br>
                <p onClick={this.handleClick}>{picture.description}</p>
                </div>
            )
        }

        return (

            <span className="galleryItem">
                <div className="galleryItem-top">
                    {imageOrText}
                </div>
                <div className="galleryItem-bottom">
                    <br></br>
                    <button onClick={() => this.props.likedPhoto(picture)}>I LOVE IT!</button>
                    <p>{picture.likes} people loved this photo</p>
                </div>
            </span>

        )
    }
}
// gallery item needs a button and needs to call one image out of the array.

export default GalleryItem