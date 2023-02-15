import React, { useState } from 'react'
import axios from 'axios'
export default function Profile() {
    const [user, setUser]= useState('')
    const [username, setUsername]= useState('')
    const [projectProblem, setProjectProblem]= useState([])
    const [contact, setContact]= useState([])
    const [rating, setRating]= useState([])

    React.useEffect(()=>{
        const data= localStorage.getItem('username')
        const dataUsername = localStorage.getItem('usernameee')
        if(data != ''){
          setUser(JSON.parse(data))
          setUsername(JSON.parse(dataUsername))
        }

        ///api/RatingsGet

        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/RatingsGet',
            data: {
                email:JSON.parse(data),
                password:"",
            }
          }).then((response) => {
                console.log("responseGet",response.data);
                setRating(response.data)
          }, (error) => {
            console.log("ermalror",error, data);
          });

        //api/ContactsGet
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/ContactsGet',
            data: {
                email:JSON.parse(data),
                password:"",
            }
          }).then((response) => {
                console.log("responseGet",response.data);
                setContact(response.data)
                console.log("CONTACT", contact)
          }, (error) => {
            console.log(error);
          });



        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/ProjectDatasGet',
            data: {
                email:JSON.parse(data),
                password:"",
            }
          }).then((response) => {
                console.log("responseGet",response.data);
                console.log("TEST",response);
                setProjectProblem(response.data)
          }, (error) => {
            console.log(error);
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
            <button onClick={handleClick} >LOG OUT</button>
           <h1>Username: { username }</h1>
           <div style={{marginTop:"50px"}}>""</div>
           {projectProblem.length > 0 ?
               projectProblem.map((proj, index) => 
                <div >
                    <h1>{index+1} - your contact: {projectProblem[index].projectProblem}</h1>
                </div>
              )
            :
            null
            }
              <div style={{marginTop:"50px"}}>""</div>
              { contact.length > 0 ?
               contact.map((proj, index) => 
                <div >
                    <h1>{index+1} - your contact: {contact[index].userContact}</h1>
                </div>
              )
            : null
            }
              <div style={{marginTop:"50px"}}>""</div>
              {rating.length > 0 ?
               rating.map((proj, index) => 
                   <div >
                <h1>{index+1} - your rating : {rating[index].userRating}</h1>
               
                </div>
              )
            :null
            }
            
        </div>
    )
}
