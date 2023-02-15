import React from 'react'
import './Style.css'
import {Row, Col} from 'reactstrap'
import Pic from '../../Pictures/scopeWhite.png'
import Pic1 from '../../Pictures/scope.png'
import Pic2 from '../../Pictures/bugWhite.png'
export default function Footer() {
    return (
        <div className="bodyFooter" >
           
            <Row>
                <Col sm="4" >
                    <img className="picFooter" src={Pic} alt="pic" />
                </Col>
                <Col sm="4" >
                    <img className="picFooter" src={Pic1} alt="pic" />
                </Col>
                <Col sm="4" >
                    <img className="picFooter" src={Pic2} alt="pic" />
                </Col>
            </Row>
            
        </div>
    )
}
