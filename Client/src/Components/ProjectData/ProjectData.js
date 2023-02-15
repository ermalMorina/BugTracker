import React, {useState} from 'react'
import './Style.css'
import axios from 'axios'
export default function ProjectData() {
    const emailLC = localStorage.getItem('username')
    const [projectProblem, setProjectProblem]= useState(null)


    function handleSubmit(e){
        e.preventDefault();
        console.log("RATE",JSON.parse(emailLC))
        if(projectProblem != null){
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/ProjectDatas',
            data: {
                projectProblem:projectProblem,
                projectProgress:0,
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
        setProjectProblem(e.target.value) 
    }
    return (
        <div className="bodyProjectData">
            <textarea onChange={handleInput}  class="txtAreaProject" type="text" rows="5" cols="18" placeholder="Enter your message" />
            <br />
            <button onClick={handleSubmit} className="submitProjectData">Submit your project data</button>
        </div>
    )
} 