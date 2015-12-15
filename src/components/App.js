import React, { Component } from 'react';
import Menu from './Menu';
import PhotoGallery from './PhotoGallery';
import ImageCard from './ImageCard';
import connectToStores from 'alt-utils/lib/connectToStores';
import ImageStore from '../stores/ImageStore';

@connectToStores
export default class App extends Component {

    static getStores(){
        return [ImageStore];
    }

    static getPropsFromStores(){
        return ImageStore.getState();
    }

    render() {
        let images = this.props.images.map((img, index)=>{
            img.key = 'img' + index;
            return img;
        });

        return (
            <div>
                <Menu />
                <PhotoGallery images={images} />
            </div>
        );
    }
}
