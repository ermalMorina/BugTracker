import React, {useState} from 'react'
import Pic from '../../Pictures/bugWhite.png'
import HomeTest1 from '../../Pictures/testHome.png'
import axios from 'axios'
import './Style.css'
import { Col, Row, Card, CardTitle, CardText } from 'reactstrap'
export default function Contact() {


    const emailLC = localStorage.getItem('username')

    const [contact, setContact]= useState(null)


    function handleSubmit(e){
        e.preventDefault();
        console.log("RATE",JSON.parse(emailLC))
        if(contact != null){
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/Contacts',
            data: {
                userContact:contact,
                email:JSON.parse(emailLC)
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
        }else{
            console.log("Contact field shoudnt be empty")
        }
    }


    function handleInput(e){
        setContact(e.target.value) 
    }


    return (
        <div className="bodyContact" >
            <Row>
                <Col sm="6">
                    <div className="picUpContact" > 
                        <img className="picUpTestContact" src={HomeTest1} alt="homepictest" />
                    </div>
                </Col>
                <Col sm="6"  >
                <form style={{marginTop:"0%"}} className="contactForm" >
                    <div className="divNamee" >
                        <img className="logoo" src={Pic} />
                        <h3 className="upLogReg">Contact us</h3>
                    </div>
                    <div className="content">
                        <textarea onChange={handleInput} style={{marginTop:"7px"}} class="txtAreaContact" type="text" rows="5" placeholder="Enter your message" required />
                        <br />
                        <button className="buttonn" type="submit" onClick={handleSubmit} ><span>Submit </span></button>
                    </div>
                </form>
                </Col>
                
                 </Row>
                 </div>
    )
}
