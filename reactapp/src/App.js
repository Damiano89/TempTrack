import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import NavBar from './NavBar';
import { Footer } from './Footer';
import { EmployeeButton } from './EmployeeButton';
import { GuestButton } from './GuestButton';
import EmployeePage from './Pages/Employee/EmployeePage';
import GuestPage from './Pages/Guest/GuestPage';

import{
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      <Router>
      <NavBar />
       <div className="mainContent">
        <Switch>
         <Route exact path="/">
            <EmployeeButton />
            <br /><br />
            <br /><br />
            <GuestButton />
         </Route>
       <Route path="/employee"><EmployeePage /></Route>
       <Route path="/guest"><GuestPage /></Route>
       </Switch>
       </div>
       <Footer />
      </Router>
      </div>
    );
   
  }
}
