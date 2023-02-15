import React, { useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Redirect, Route, Router } from 'react-router-dom';
import Routes from './Routes';
import Login from './Components/RegisterLogin/Login'
import Footer from './Components/Footer/Footer'
import Axios from 'axios'
export default function App() { 
  
  const [data, setData]= useState(null)
  React.useEffect(()=>{
    if(localStorage.getItem('username')!= null){
    setData(localStorage.getItem('username'))
    }
    console.log(data)
  },[])
  console.log(data,"app")
 
//   function getGet(event: React.FormEvent<HTMLInputElement>){
//     event.preventDefault();
//     console.log("request api test")
//     Axios({
//         method: 'get',
//         url: 'https://jsonplaceholder.typicode.com/todos/1',
//       }).then((response) => {
//         console.log(response);
//       }, (error) => {
//         console.log(error);
//       });
// }
  return (
    <div style={{backgroundColor:"#5580a0"}}>
        <NavBar data={ data } />
        <Routes data={ data } />
        <Footer />
    </div>
  )
}