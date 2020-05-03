import React, { Component } from 'react';

//GalleryItem is where individual "image packages" are assembled and returned ot GalleryList

class GalleryItem extends Component {
    state = {
        flipped: false
    }//flipped being true will trigger conditional logic to display the text description instead of the picture. as if the photo was turned over.

    handleClick = () => {
        this.setState({
            flipped: !this.state.flipped
        })
    }// end click handler for the button that is the picture itself





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
        }//end conditional, this is where the image displays either picture or text depending on state of "flipped"

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

        )//end return
    }//end render
}//end component
// galleryItem-bottom button is for adding Likes.

export default GalleryItem