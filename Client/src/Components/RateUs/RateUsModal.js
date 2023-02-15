import axios from 'axios';
import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import StarsRating from 'stars-rating'
export default function RateUsModal(props) {
    const {id, rating, email } = props
    const [modal, setModal] = useState(false);
    const [rate, setRate]=useState(5)
    const toggle = () => setModal(!modal);
    const [open, setOpen] = React.useState(false)

    function handleSubmit(){
       console.log("id",id);
       console.log("rating",rate);
       console.log("email",email)
        axios.put(`http://localhost:5000/api/Ratings/${id}`, 
        {
            id:id,
            userRating: rate ,
            email: email,   
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

    function handleClick(nextValue) {
        setRate(nextValue);
        console.log(nextValue)
        console.log("changed")
    }
    return (
        <div>
            <Button color="primary" onClick={toggle}><i class="far fa-edit"></i> Edit Rate</Button>
            <Modal isOpen={modal} toggle={toggle}  style={{ width:"500px" }}>
            <ModalHeader toggle={toggle}>Form REGLOG</ModalHeader>
            <ModalBody>
            <StarsRating 
                count={5}
                half={false}
                onChange={handleClick}
                size={44}
                color1={'black'}
                color2={'yellow'} />
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}
RateUsModal.defaultProps={
    id:null,
    userRating: null ,
    email: null,
}