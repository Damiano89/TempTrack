import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import NavBar from './NavBar';
import { Footer } from './Footer';
import { EmployeeButton } from './EmployeeButton';
import { GuestButton } from './GuestButton';
import EmployeePage from './Pages/Employee/EmployeePage';
import GuestPage from './Pages/Guest/GuestPage';
import Temperatures from './temperatures';
import News from './News';

import{
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
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
       <Route path="/temperatures"><Temperatures /></Route>
       <Route path="/employee"><EmployeePage /></Route>
       <Route path="/guest"><GuestPage /></Route>
       <Route path="/news"><News /></Route>
       </Switch>
       </div>
       <Footer />
      </Router>
      </div>
    ); 
  }
}

export default App;