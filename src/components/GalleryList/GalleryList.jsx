import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const pictures = this.props.pictures;
        //created variable of what's coming from the property
        console.log(pictures);
        console.log('In GalleryList');
        return (
            <div>
                <span>
                    {pictures.map((picture) => <GalleryItem picture={picture} />)}
                </span>

            </div>
        )
    }
}
//placeholder image is hard coded, needs to be changed to dynamic

export default GalleryList