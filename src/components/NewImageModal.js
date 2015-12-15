import React from 'react';
import { Modal, Button, Input, ButtonInput } from 'react-bootstrap';
import Actions from '../actions';
import trim from 'trim';


class NewImageModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            file: ''
        };
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateFile = this.updateFile.bind(this);
    }

    render(){
        const inputTypeInstance = (
            <form>
                <Input type="text" label="Name*" placeholder="Enter Name" onChange={this.updateName} required/>
                <Input type="textarea" label="Description" placeholder="Enter Description" onChange={this.updateDescription} />
                <Input type="file" label="File*" onChange={this.updateFile} accept="image/*" />
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
                    <Button bsStyle='success' onClick={this.addImage.bind(this)}>Add</Button>
                    <Button bsStyle='warning' onClick={this.props.close}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    addImage(){
        if (trim(this.state.name)== '' || this.state.file == '')
        {
            console.log('name and file are required!');
            return;
        }
        let {name, description, file} = this.state;
        Actions.addImage({name, description, file});
        this.props.close();
        this.setState({
            name: '',
            description: '',
            file: ''
        });
    }

    updateName(e){
        this.setState({name: e.currentTarget.value || null});
    }

    updateDescription(e){
        this.setState({description: e.currentTarget.value || null});
    }

    updateFile(e){
        download(e.target.files[0])
            .then((file)=>this.setState({file}))
            .catch(()=>console.log('Error: you should select an image file.'))
    }
}

function download(file){
    return new Promise((resolve, reject)=>{
        if (file.type.match('image.*')){
            let fr = new FileReader();
            fr.readAsDataURL(file);
            fr.onloadend = function(e){
                resolve(e.target.result);
            };
        }
        else
            reject();
    });
}

export default NewImageModal;