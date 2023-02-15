import React, {useState} from 'react'
import '../RateUs/Style.css'
import { Row, Col } from 'reactstrap'
import HomeTest1 from '../../Pictures/testHome.png'

import RateUsForm from './RateUsForm'
export default function RateUs() {

    
    return (
        <div className="bodyRateUs">
            <Row>
                <Col sm="3">
                    <div>
                    <RateUsForm />
                    </div>
                </Col>
                <Col sm="4" >
                    <div className="helpUsImprove" >
                    <h1>Help us imporve</h1>
                        <p className="txt">With BugTracker you can save up to 50 % of your time allotted to testing. This way you can shift your focus from test documentation to testing itself, helping your team to ship better software faster..</p>
                        </div>
                </Col>
                <Col sm="5">
                    <div className="picUpRate" > 
                        
                        <img className="picUpTestRate" src={HomeTest1} alt="homepictest" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
