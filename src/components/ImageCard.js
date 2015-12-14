import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class ImageCard extends React.Component{
    render(){
        return (
            <Thumbnail src="http://lorempixel.com/242/200/nature/" alt="242x200">
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

