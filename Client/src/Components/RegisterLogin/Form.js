import React, { useState } from 'react'
import '../RegisterLogin/Style.css'
import Pic from '../../Pictures/bugWhite.png'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
export default function Form() {

    let history = useHistory();

    const [loginR, setLogin]= useState(true) 
    const [roleR, setRole]= useState(null);
    const [emailR, setEmail]= useState(null);
    const [usernameR, setUsername]= useState(null);
    const [passwordR, setPassword]= useState(null);

    const emRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    function handleSubmitLogin(e){
        e.preventDefault();
        if(emRegex.test(emailR)){
            console.log('regex tested')
        }else{
            console.log("not regex tested")
        }
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/UserDatasLogin',
            data: {
                email:emailR,
                password:passwordR,
                rolee:roleR
            }
          }).then((response) => {
              
            if(response.status == 200)
            {   
                console.log(response.data[0].username)
                console.log(response.data[0].email)
                console.log(response.data[0].role)

                localStorage.setItem('username', JSON.stringify(response.data[0].email));
                localStorage.setItem('usernameee', JSON.stringify(response.data[0].username));
                localStorage.setItem('role', JSON.stringify(response.data[0].role));
                window.location.reload();
                history.push('/')
                window.location.reload();
                window.location.reload();
            }
                console.log("responseLogin",response);
          }, (error) => {
            console.log("ermalror",error);
          });
        
        
    }
    function handleSubmit(e){
        e.preventDefault();
        
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/UserDatas',
            data: {
                email:emailR,
                username:usernameR,
                password:passwordR,
                role:roleR
            }
          }).then((response) => {
            console.log(response);
            if(response.status == 201 || response.status == 200){
                localStorage.setItem('username', JSON.stringify(emailR));
                localStorage.setItem('role', JSON.stringify(roleR));
                localStorage.setItem('usernameee', JSON.stringify(usernameR));
                window.location.reload();
                history.push('/')
                window.location.reload();
                window.location.reload();
                console.log("CALLED")
            }
          }, (error) => {
            console.log("werror",error);
          });
        
    }
    
    // function handleInputEmail(e){
    //     setEmail(e.target.value)
    //     console.log(email)
    // }
    function handleInputEmail (e){
        setEmail(e.target.value)
      }
    function handleInputUsername(e){
        setUsername(e.target.value)
    }
    function handleInputPassword(e){
        setPassword(e.target.value) 
    }
    function handleUserStaff(e){
        if(e.target.value == 'user' ){
            setRole(2)
        }else if( e.target.value == 'staff' ){
            setRole(1)
        }
        
        console.log("inputRolee",roleR)
    }
    function handleLogtoReg(e){
        e.preventDefault();
        
        setLogin(false)
    }
    
    function handleRegtoLog(e){
        e.preventDefault();
        
        setLogin(true)
    }
    return (
        <div className="bodyForm"> 
            <form className="form" >
                <div className="divNamee" >
                <img className="logoo" src={Pic} />
                <h3 className="upLogReg">Login/Register</h3>
                </div>
                
                {loginR ?
                //FORM EMPTY
                <div className="content">
                    <div className="radioo" ></div>
                 <input className="inp" type="email" onChange={handleInputEmail} name="email" placeholder="email" />
                 <br />
                 <input className="inp" type="password" onChange={handleInputPassword} name="password" placeholder="password" />
                 <br />
                 <button className="logreg-button"  type="submit" onClick={handleLogtoReg} >  Not yet a member</button>
                 <br />
                 <button className="button" type="submit" onClick={handleSubmitLogin} ><span>Submit </span></button>
                 </div>
                :
                <div className="content">
                <div className="radioo" >
                <input className="radio"   onClick={handleUserStaff} type="radio" id="useri" name="age" value="user" />
                <label style={{color:"white"}} for="useri">User</label>
                <input className="radio"   onClick={handleUserStaff} type="radio" id="staffi" name="age" value="staff" />
                <label style={{color:"white"}} for="staffi">Staff</label><br />  
                </div>
                <input className="inp" type="email" onChange={handleInputEmail} name="email" placeholder="example@example.com" />
                <br />
                <input className="inp" type="username" onChange={handleInputUsername} name="username" placeholder="username" />
                <br />
                <input className="inp" type="password" onChange={handleInputPassword} name="password" placeholder="password" />
                <br />
                <input className="inp" type="password" onChange={handleInputPassword} name="password" placeholder="re-enter password" />
                <br />
                <button className="logreg-button" type="submit" onClick={handleRegtoLog} >Already a member</button>
                <br />
                <button className="button" type="submit" onClick={handleSubmit} ><span>Submit </span></button>
                </div>
                //FORM EMPTY 
                }
            </form>
        </div>
    )
//     function LoginForm() {
//     return (
//         
//     )
// }
}