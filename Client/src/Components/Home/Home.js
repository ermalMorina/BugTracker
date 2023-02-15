import React from 'react'
import HomeImg from '../../Pictures/bugWhite.png'
import ScopeWhite from '../../Pictures/scopeWhite.png'
import HomeTest1 from '../../Pictures/testHome.png'
import HomeTest2 from '../../Pictures/testHome2.png' 
import '../Home/Style.css'
import {Row, Col, CardTitle, CardText, Card }from 'reactstrap'
export default function Home() {
    
    

    return (
        
        <div className="bodyHome" style={{backgroundColor:"white"}}>
            <div className="picUp" >
                <h1 style={{color:"#32435f"}} className="txt">Bug Tracker</h1>
                <h5 style={{color:"#32435f"}} className="txt">We all know that sometimes programming gets difficult so we are here for you to guide into professional programming.</h5>
                <img className="picUpTest" src={HomeTest1} alt="homepictest" />
            </div>
            <Row>
                <Col sm="4">
                    <div body style={{ backgroundColor:"white", height:"50%", marginTop:"15%" , marginLeft:"10%"}}>
                    <h2 className="txt" tag="h5">Bug Tracker</h2>
                    <p className="txt">With BugTracker you can save up to 50 % of your time allotted to testing. This way you can shift your focus from test documentation to testing itself, helping your team to ship better software faster..</p>
                    <p className="txt">We all know that sometimes programming gets difficult so we are here for you to guide into professional programming.</p>
                    </div>
                </Col>
                <Col sm="8">
                    <div body style={{ backgroundColor:"white" }}>
                    <img style={{height:"50%"}} className="pic" src={HomeTest2} alt="picture" />
                    </div>
                </Col>
            </Row>
            
        </div>
        
    )
}
