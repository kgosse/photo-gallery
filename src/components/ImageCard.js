import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

class ImageCard extends React.Component{
    render(){
        return (
            <Thumbnail src={this.props.image.file} alt="" width="200" height="200">
                <h3>{this.props.image.name}</h3>
                <p>{this.props.image.description}</p>
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

