import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const pictures = this.props.pictures;
        //created variable of what's coming from the property
        // Add this log back in (and remove this text) if checking to make sure array data is coming in clean. console.log(pictures)
        console.log('In GalleryList');
        return (
            <div>
                <span>
                    {pictures.map((picture) => <GalleryItem key={picture.id} picture={picture} likedPhoto={this.props.likedPhoto}/>)}
                </span>
            </div>
        )//end return
    } //end render
}//end Component
//placeholder image was hard coded during testing.

export default GalleryList