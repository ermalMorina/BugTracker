import axios from 'axios';
import React, {useState} from 'react'
import {InputGroup, InputGroupAddon, Input,Row,Col, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
export default function ModalRegLog(props) {
    const {email, username, password, role}= props;

    const [roleR, setRole]= useState(null);
    const [emailR, setEmail]= useState(null);
    const [usernameR, setUsername]= useState(null);
    const [passwordR, setPassword]= useState(null);

    const {
        buttonLabel,
        className
      } = props;
      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    const [open, setOpen] = React.useState(false)

      const data={
        email:emailR,
        username:usernameR,
        password:passwordR,
        role:roleR
      }
      function handleSubmit(){
          console.log("emailR",emailR)
          console.log("usernameR",usernameR)
          console.log("passwordR",passwordR)
          console.log("roleR",roleR)
        axios.put(`http://localhost:5000/api/UserDatas/${email}`,data)
        .then(
            res =>{
                console.log("res",res)
            }
        )
        .catch(error => {
            
            console.error('There was an error!', error);
        });

        setModal(!modal)
      }


    function handleInputEmail (e){
        setEmail(e.target.value)
      }
    function handleInputUsername(e){
        setUsername(e.target.value)
    }
    function handleInputPassword(e){
        setPassword(e.target.value) 
    }
    function handleUserStaff(e){
        setRole(e.target.value)
        
        console.log("inputRolee",roleR)
    }
    return (
    
    <div className="container">
        <Button color="primary" onClick={toggle}>Edit User</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>EDIT</ModalHeader>
                <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@email</InputGroupAddon>
                    <input className="inp" type="email" onChange={handleInputEmail} />
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@username</InputGroupAddon>
                    <input className="inp" type="email" onChange={handleInputUsername}/>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@password</InputGroupAddon>
                    <input className="inp" type="email" onChange={handleInputPassword}/>
                </InputGroup>
                    <br />
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">@role</InputGroupAddon>
                    <input className="inp" type="email" onChange={handleUserStaff} />
                </InputGroup>
                    <br />
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit}>Submit Changes</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    </div>
    )
}

ModalRegLog.defaultProps={
    email:null,
    username:null,
    password:null,
    role:null
}