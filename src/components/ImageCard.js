import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class ImageCard extends React.Component{
    render(){
        return (
            <Thumbnail src="http://lorempixel.com/400/400/nature/" alt="400x400">
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                    <Button bsStyle="primary">Visualize</Button>&nbsp;
                    <Button bsStyle="warning">Modify</Button>&nbsp;
                    <Button bsStyle="danger">Delete</Button>
                </p>
            </Thumbnail>
        )
    }
}

export default ImageCard;

