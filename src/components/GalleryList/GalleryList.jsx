import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        console.log('In GalleryList');
        return (
            <div>
            <h1>Hi From GalleryList</h1>
            <GalleryItem />
            </div>
        )
    }
}
export default GalleryList