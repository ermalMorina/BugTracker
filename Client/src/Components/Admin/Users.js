import { Button } from 'reactstrap';
import React from 'react'
import ModalRegLog from '../RegisterLogin/ModalRegLog'
import axios from 'axios';
export default function Users(props) {
    
    const {email, username, password, role } = props;
    const URL = `http://localhost:5000/api/UserDatas/${email}`;
    async function handleDelete (){
        console.log(URL)
        if(window.confirm('Are you sure?')){
        await axios.delete(URL)
        .then(response => {
            console.log(response)
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
                    <tr style={{color:"white"}}>
                    <td style={{width:"30%", color:"white"}}>{email}</td>
                    <td style={{width:"20%", color:"white"}}> {username} </td>
                    <td style={{width:"20%", color:"white"}}> {password} </td>
                    <td style={{width:"10%", color:"white"}}> {role} </td>
                    <td style={{width:"10%", color:"white"}}> { <ModalRegLog email={email} username={username} password={password} role={role} /> } </td>
                    <td style={{width:"10%", color:"white"}}><Button color="danger" onClick={handleDelete} >Delete</Button></td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Users.defaultProps={
     id:"",
    userContact:"",
     email:""

}