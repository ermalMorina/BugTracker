import { Button } from 'reactstrap';
import React from 'react'
import ContactModal from '../Contact/ContactModal';
import axios from 'axios';
export default function Contact(props) {
    
    const {id, userContact, email } = props;
    const URL = `http://localhost:5000/api/Contacts/${id}`
    async function handleDelete (){
        console.log(URL)
        if(window.confirm('Are you sure?')){
        await axios.delete(URL)
        .then(response => {
            console.log("response",response)
            console.log(URL)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
        }
    }
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>
                    <td style={{width:"10%", color:"white"}}>{id}</td>
                    <td style={{width:"55%", color:"white"}}> {userContact} </td>
                    <td style={{width:"20%", color:"white"}}> {email} </td>
                    <td style={{width:"12%", color:"white"}}> { <ContactModal idC={id} messageContactC={userContact} emailC={email} color="primary" /> } </td>
                    <td style={{width:"13%", color:"white"}}> <Button onClick={handleDelete} color="danger">Delete</Button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Contact.defaultProps={
     id:0,
    userContact:"",
     email:""

}