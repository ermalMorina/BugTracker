import React, {useState} from 'react'
import {Col , Row } from 'reactstrap'
import axios from 'axios';
import {Table } from 'reactstrap'
import Pic from '../../Pictures/scope.png'
import Contact from './Contact'
import Users from './Users';
import Rates from './Rates';
import ProjectProblem from './ProjectProblems';
export default function Dashboard() {
    const [users, setUsers]= useState([])
    const [rate, setRate]= useState([])
    const [contact, setContact]= useState([])
    const [project, setProject]= useState([])

    const [userClicked, setUserClicked] = useState(false)
    const [contactClicked, setContactClicked] = useState(false)
    const [rateClicked, setRateClicked] = useState(false)
    const [projectClicked, setProjectClicked] = useState(false)


    async function getUsers(){
      console.log("CLICKED")
        await axios.get('http://localhost:5000/api/UserDatas').then(resp => {
            setUsers(resp.data)
            setUserClicked(!userClicked)
            console.log(users)
        });
    }
    async function getProjects(){
      console.log("CLICKED")
       await axios.get('http://localhost:5000/api/ProjectDatas').then(resp => {
        setProject(resp.data)
        console.log(project)
        setProjectClicked(!projectClicked)
        });
    }
    async function getContacts(){
      console.log("CLICKED")
        await axios.get('http://localhost:5000/api/Contacts').then(resp => {
            setContact(resp.data)
            setContactClicked(!contactClicked)
            console.log(contact);
        });
    }
    async function getRates(){
      console.log("CLICKED")
        await axios.get('http://localhost:5000/api/Ratings').then(resp => {
            setRate(resp.data)
            setRateClicked(!rateClicked)
            console.log(rate);
        });
    }
    // function show(){
    //     setUserClicked(!userClicked)
    // }
    // function show2(){
    //     setContactClicked(!contactClicked)
    //     console.log(contactClicked,"cntctnc")
    // }
    // function show1(){
    //     setRateClicked(!rateClicked)
    // }
    // function show3(){
    //     // setProjectClicked(!projectClicked)
    //     console.log(projectClicked,"TEST")
    // }
    function logout () {
      localStorage.removeItem("username");
         localStorage.removeItem("role");
         localStorage.removeItem("usernameee");
      window.location.reload();
     window.location.reload();
  }
    return (
        <div className="bodyDashboard">
          <div style={{ width:"40%", marginLeft:"30%" }} ></div>
            <button onClick={getUsers}>Users</button>
            <button onClick={getProjects}>Projects</button>
            <button onClick={getContacts}>Contacts</button>
            <button onClick={getRates}>Rates</button>
            <button onClick={logout}>LOG OUT</button>
            {/* <br />
            <button onClick={show}>Show Users</button>
            <button onClick={show3}>Show Projects</button>
            <button onClick={show2}>Show Contacts</button>
            <button onClick={show1}>Show rates</button> */}
            {userClicked ?
            <table class="table">
            <tbody>
                <tr>
                <td style={{width:"10%", color:"white"}}>ID</td>
                <td style={{width:"55%", color:"white"}}>CONTACT TEXT </td>
                <td style={{width:"20%", color:"white"}}>EMAIL</td>
                <td style={{width:"12%", color:"white"}}>EDIT</td>
                <td style={{width:"13%", color:"white"}}>DELETE</td>
                </tr>
            </tbody>
        </table>
              :
              null 
            }           
            {
              userClicked ? 
              users.map(us => (
                <div key={users.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <Users email={us.email} username={us.username} password={us.password}  />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }


            { userClicked ? 
              <div style={{backgroundColor:"white", marginBottom:"50px"}}>
                <h1 style={{color:"white"}}>''</h1>
              </div>
            : null }
            


            {/* 2 */}
            {projectClicked ?
            <table class="table">
            <tbody>
                <tr>
                <td style={{width:"5%", color:"white"}}>ID</td>
                <td style={{width:"60%", color:"white"}}>PROJECT </td>
                <td style={{width:"10%", color:"white"}}>PROGRES</td>
                <td style={{width:"20%", color:"white"}}> EMAIL</td>
                <td style={{width:"6%", color:"white"}}>EDIT</td>
                <td style={{width:"6%", color:"white"}}>DELETE</td>
                </tr>
            </tbody>
        </table>
              :
              null 
            }           
            {
              projectClicked ? 
              project.map(us => (
                <div key={us.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <ProjectProblem id={us.id} projectProblem={us.projectProblem} projectProgress={us.projectProgress} email={us.email}  />
                </div>
                // console.log(users.DataUserEmail, users.DataUserName, users.DataUserPassword)
              ))
              :
              null
            }
            {/* 2 */}
            {projectClicked ?
              <div style={{backgroundColor:"white", marginBottom:"50px"}}>
                <h1 style={{color:"white"}}>''</h1>
              </div>
            : null}
            




            {/* 3 */}
            {contactClicked ?
            <table class="table">
            <tbody>
                <tr>
                <td style={{width:"10%", color:"white"}}>ID</td>
                <td style={{width:"55%", color:"white"}}>CONTACT TEXT </td>
                <td style={{width:"20%", color:"white"}}>EMAIL</td>
                <td style={{width:"12%", color:"white"}}>EDIT</td>
                <td style={{width:"13%", color:"white"}}>DELETE</td>
                </tr>
            </tbody>
        </table>
              :
              null 
            }           
            {
              contactClicked ? 

              contact.map(us => (
                <div key={us.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <Contact id={us.id} userContact={us.userContact} email={us.email}  />
                </div>
                // console.log(us.email)
              ))

              :
              null
            }
            {/* 3 */}

            {contactClicked?
            <div style={{backgroundColor:"white", marginBottom:"50px"}}>
              <h1 style={{color:"white"}}>''</h1>
            </div>
            :null}


            {/* 4 */}
            {rateClicked ?
            <table class="table">
            <tbody>
                <tr>
                <td style={{width:"25%", color:"white"}}>ID</td>
                <td style={{width:"25%", color:"white"}}> USERRATINGS </td>
                <td style={{width:"30%", color:"white"}}>EMAIL </td>
                <td style={{width:"10%", color:"white"}}> EDIT </td>
                <td style={{width:"10%", color:"white"}}> DELETE</td>
                </tr>
            </tbody>
        </table>
              :
              null 
            }           
            {
              rateClicked ? 

              rate.map(us => (
                <div key={us.email}>
                {/* <Button onClick={()=>this.deleteCOmp(complaints.id)} color="danger">Delete</Button> */}
                
                  <Rates id={us.id} userRating={us.userRating} email={us.email}  />
                </div>
                // console.log(us.email)
              ))

              :
              null
            }
            {/* 4 */}

        </div>
    )
}
