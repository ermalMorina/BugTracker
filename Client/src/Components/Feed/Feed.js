import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Style.css'
import ModalRegLog from '../RegisterLogin/ModalRegLog'
import RateUsModal from '../RateUs/RateUsModal'
import ContactModal from '../Contact/ContactModal';
export default function Feed() {
    return(
        <div>
        <h1>FEEED</h1>
        <ModalRegLog />
        <RateUsModal />
        <ContactModal />
        </div>
    )
}
