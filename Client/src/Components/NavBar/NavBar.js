import React, { useState} from 'react'
import { 
  Navbar as RSNavBar,
  Nav, 
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../../Pictures/bugWhite.png'
import './NavBar.css'

export default function NavBar(props) {

  const data= props;

  const [role, setRole]= useState(null)
    React.useEffect(()=>{
        const getRole= localStorage.getItem('role')
        if(data != ''){
          setRole(JSON.parse(getRole))
        }
    },[])

  // const [isAdmin, setIsAdmin] = useState(false)
  // const [isLogedIn, setIsLogedIn] = useState(false)
  return (
    <div className="body">
      <div className="divName">
      <img src={Logo} alt="a"/> 
      <h1 style={{fontSize:"50px", color:"white" }} >Bug Tracker</h1>
      </div>
      <div class="d-flex justify-content-center">
      <RSNavBar className="navBar" color="#5580a0" light expand="md">
          <Nav >
            
              <Nav >
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"5px" }} href="/">
                Home
            </NavLink>
          </NavItem>{''}
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/projectdata">
                Add a project
            </NavLink>
          </NavItem>
          {/* <NavItem>
              <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/feed">
                  Feed
              </NavLink>
            </NavItem> */}
          
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/contactus">
              Contact us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/rateus">
              Rate us
            </NavLink>
          </NavItem>
         
            <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/staff">
              Staff
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/profile">
              Profile
            </NavLink>
          </NavItem>
            
          
          <NavItem>
          <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/register-login">
              Register/Login
          </NavLink>
        </NavItem>
          
          </Nav>
          <NavItem>
          <NavLink style={{color:"white", borderBottom:"2px solid white", marginLeft:"15px" }} href="/register-login">
              Register/Login
          </NavLink>
        </NavItem>
        
        </Nav>
      </RSNavBar>
      </div>
      
    </div>
  )
}
NavBar.defaultProps={
  data:null,
}