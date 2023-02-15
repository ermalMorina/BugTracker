import React, { useState } from 'react'
import axios from 'axios';
import ProjectModal from '../ProjectData/ProjectModal';
export default function Staff() {

    const [projectProblem, setProjectProblem]=useState([]);

    React.useEffect(()=>{
            console.log("CLICKED")
            axios.get('http://localhost:5000/api/ProjectDatas').then(resp => {
                setProjectProblem(resp.data)
                console.log(resp.data)
              });
          
      },[])

    function handleClick () {
        localStorage.removeItem("username");
         localStorage.removeItem("role");
         localStorage.removeItem("usernameee");
        window.location.reload();
       window.location.reload();
    }
    return (
        <div style={{backgroundColor:"white"}}>
            <button style={{width:"20%", marginLeft:"40%", marginTop:"30px"}} onClick={handleClick}>LOG OUT</button>
            <h1 style={{width:"12%", marginLeft:"44%", marginTop:"30px"}}>PROJECTS</h1>
            {projectProblem.length > 0 ?
               projectProblem.map((proj, index) => 
                <div style={{marginTop:"50px"}}>
                    
                    <p>{index+1} - {projectProblem[index].projectProblem}</p>
                    <ProjectModal propsProj={projectProblem[index].projectProblem} ids={projectProblem[index].id} emailProp={projectProblem[index].email}/>
                </div>
              )
            :
            null
            }
            
        </div>
    )
}