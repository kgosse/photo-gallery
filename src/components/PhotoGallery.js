import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class PhotoGallery extends React.Component{
    render(){
        let cards = this.props.images.map((img, i)=>{
            let card = (
                <Col xs={6} md={4} key={'card' + i}>
                    {img.image}
                </Col>
            );
            return card;
        });

        return (
            <Grid>
                <Row>
                    {cards}
                </Row>
            </Grid>
        )
    }
}

export default PhotoGallery;