import { Button } from 'reactstrap';
import React from 'react'
import axios from 'axios';
import ProjectModal from '../ProjectData/ProjectModal'
export default function ProjectProblem(props) {
    
    const {id, projectProblem , projectProgress, email } = props;
    const URL = `http://localhost:5000​/api​/ProjectDatas​/${id}`
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
                    <td style={{width:"5%", color:"white"}}>{id}</td>
                    <td style={{width:"60%", color:"white"}}> {projectProblem} </td>
                    <td style={{width:"10%", color:"white"}}> {projectProgress} </td>
                    <td style={{width:"19%", color:"white"}}> {email} </td>
                    <td style={{width:"3%", color:"white"}}><ProjectModal propsProj={projectProblem} ids={id} emailProp={email}/></td>
                    <td style={{width:"3%", color:"white"}}><Button onClick={handleDelete} color="danger">Delete</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
ProjectProblem.defaultProps={
     id:0,
    projectProblem:"",
    projectProgress:0,
     email:""

}