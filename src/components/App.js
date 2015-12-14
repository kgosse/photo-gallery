import React, { Component } from 'react';
import Menu from './Menu';
import PhotoGallery from './PhotoGallery';
import ImageCard from './ImageCard';

export default class App extends Component {
    render() {
        let images = [];
        for (var i = 1; i <= 3; ++i){
            let image = {};
            image.key = 'image' + i;
            image.image = <ImageCard />;
            images.push(image);
        }
        return (
            <div>
                <Menu />
                <PhotoGallery images={images} />
            </div>
        );
    }
}
