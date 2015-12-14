import React from 'react';
import { Navbar, Input, Button } from 'react-bootstrap';

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
                <Input type="text" placeholder="Search"/>
                {' '}
                <Button type="submit">Add Image</Button>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
);

class Menu extends React.Component{
    render(){
        return navbarInstance
    }
}

export default Menu;
