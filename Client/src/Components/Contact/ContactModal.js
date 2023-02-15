import axios from 'axios';
import React, {useState} from 'react'
import {InputGroup, InputGroupAddon, Input,Row,Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
export default function ContactModal(props) {
    const {idC, messageContactC, emailC} = props;
    const [contact, setContact]= useState(null);
    const {
        buttonLabel,
        className
      } = props;
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    // const [open, setOpen] = React.useState(false)
      function handleChange(){
        
        
        axios.put(`http://localhost:5000/api/Contacts/${idC}`, 
        {
            id:idC,
            userContact: contact ,
            email: emailC,
      })
    .then(
        res =>{
            console.log("data",)
            console.log("res",res)
        }
    )
    .catch(error => {
        
        console.error('There was an error!', error);
    }); 
    setModal(!modal)
      }
      function handleChanges(e){
        setContact(e.target.value) 
    }
    return (
    
    <div className="container">
        <Button color="primary" onClick={toggle}>Edit Contact</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>EDIT</ModalHeader>
                <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@message</InputGroupAddon>
                    <textarea onChange={handleChanges} class="txtAreaProject" type="text" rows="5" cols="18" placeholder="Enter your message" >{messageContactC}</textarea>
            
                </InputGroup>
                </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleChange}>Submit answer</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    </div>
    )
}
ContactModal.defaultProps={
    idC:null,
    messageContactC:null,
    emailC:null
}