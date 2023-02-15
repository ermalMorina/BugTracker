import React, {useState} from 'react'
import { Row, Col } from 'reactstrap'
import HomeTest1 from '../../Pictures/testHome.png'
import Form from './Form'
import Profile from '../Profile/Profile'
import './Style.css'
export default function Register() {
    return (
        <div style={{ backgroundColor:"#32435f" }}>
                <Row>
                <Col sm="6">
                    <div className="picUpReg" > 
                        <img className="picUpTestReg" src={HomeTest1} alt="homepictest" />
                    </div>
                </Col>
                <Col sm="6">
                    <Form  />
                   
                </Col>
                </Row>
        </div>
    )
}
