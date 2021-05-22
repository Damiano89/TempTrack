import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Footer } from './Footer';
import { EmployeeTempButton } from './employeeTemp-button';
import { GuestTempButton } from './guestTemp-button';
import EmployeeList from './employee-list';
import GuestList from './guest-list';

import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class Temperatures extends React.Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
            <Route exact path="/temperatures">
                    <EmployeeTempButton />
                    <br /> <br />
                    <br /> <br />
                    <GuestTempButton />
            </Route>
       <Route path="/employeeList"><EmployeeList /></Route>
       <Route path="/guestList"><GuestList /></Route>
       <Route path="/news"></Route>
       </Switch>
       <Footer />
      </Router>
      </div>
    ); 
  }
}

export default Temperatures;