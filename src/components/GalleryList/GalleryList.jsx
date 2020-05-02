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
                <h1>Hi From GalleryList</h1>
                <h2>TEST: {JSON.stringify(pictures)}</h2>
                <span>
                    {pictures.map((picture) => <GalleryItem picture={picture} />)}
                </span>

            </div>
        )
    }
}
//placeholder image is hard coded, needs to be changed to dynamic

export default GalleryList