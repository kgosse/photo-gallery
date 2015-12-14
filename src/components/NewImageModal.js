import React from 'react';
import { Modal, Button, Input, ButtonInput } from 'react-bootstrap';

class NewImageModal extends React.Component{
    render(){
        const inputTypeInstance = (
            <form>
                <Input type="text" label="Name" placeholder="Enter Name" />
                <Input type="textarea" label="Description" placeholder="Enter Description" />
                <Input type="file" label="File" />
            </form>
        );

        return (
            <Modal show={this.props.showModal} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {inputTypeInstance}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle='success' >Add</Button>
                    <Button bsStyle='warning' onClick={this.props.close}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default NewImageModal;