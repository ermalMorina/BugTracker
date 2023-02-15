import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import Home from './Components/Home/Home'
  import Register from './Components/RegisterLogin/Register'
  import RateUs from './Components/RateUs/RateUs'
  import ProjectData from './Components/ProjectData/ProjectData'
  import ContactUs from './Components/Contact/Contact'
  import Feed from './Components/Feed/Feed'
  import Profile from './Components/Profile/Profile'
  import Dashboard from './Components/Admin/Dashboard';
import Staff from './Components/Staff/Staff';

export default function Routes(props) {

    const data = props;
    return (
        <Router>
      <div>
          
            <Switch>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/projectdata">
                <ProjectData />
            </Route>
            {/* <Route exact path="/feed">
                <Feed />
            </Route> */}
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/staff">
                <Staff />
            </Route>
            
            <Route exact path="/contactus">
                <ContactUs />
            </Route>
            <Route exact path="/rateus">
                <RateUs />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            
            
        </Switch>
        
        

        <Switch >
        <Route exact path="/register-login">
                <Register />
            </Route>
        </Switch>
          
        
      </div>
    </Router>
    )
}

Routes.defaultProps={
    data:null
}