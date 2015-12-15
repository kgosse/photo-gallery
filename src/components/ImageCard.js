import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import Actions from '../actions';

class ImageCard extends React.Component{
    render(){
        return (
            <Thumbnail src={this.props.image.file}>
                <h3>{this.props.image.name}</h3>
                <p>{this.props.image.description}</p>
                <p>
                    <Button bsStyle="danger" onClick={this.deleteImage.bind(this)}>Delete</Button>
                </p>
            </Thumbnail>
        )
    }

    deleteImage(){
        Actions.removeImage(this.props.image);
    }
}

export default ImageCard;

