import { Button } from 'reactstrap';
import React from 'react'
import RateUsModal from '../RateUs/RateUsModal'
import axios from 'axios';
export default function Rates(props) {
    const {id, userRating, email }= props;

    const URL = `http://localhost:5000/api/Ratings/${id}`
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
            <table  class="table">
                <tbody>
                    <tr>
                    <td style={{width:"25%", color:"white"}}>{id}</td>
                    <td style={{width:"25%", color:"white"}}> {userRating} </td>
                    <td style={{width:"30%", color:"white"}}> {email} </td>
                    <td style={{width:"10%", color:"white"}}> {<RateUsModal id={id} rating={userRating} email={email} />} </td>
                    <td style={{width:"10%", color:"white"}}> <Button onClick={handleDelete} color="danger">Delete</Button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
Rates.defaultProps={
     id:0,
    userRating:0,
     email:""

}