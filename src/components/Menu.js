import React from 'react';
import { Navbar, Input, Button, Modal } from 'react-bootstrap';
import ImageModal from './NewImageModal';
import Actions from '../actions';


class Menu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){
        const navbarInstance = (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Photo Gallery</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <Input type="text" placeholder="Search" onChange={this.nameFilter} />
                        {' '}
                        <Button bsStyle='success' onClick={this.open}>Add Image</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
                <ImageModal showModal={this.state.showModal} close={this.close.bind(this)}/>
            </Navbar>
        );


        return navbarInstance
    }

    nameFilter(e){
        Actions.nameFilter(e.currentTarget.value || null);
    }
}

export default Menu;
