import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';
import { EmployeeButton } from './EmployeeButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GuestButton } from './GuestButton';
import { Footer } from './Footer';
import './Responsive.css';

export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
        <div className="mainContent w3-half">
          <EmployeeButton />
          <br />
          <br />
          <GuestButton />
        </div>
        <Footer />
      </div>
      
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('root'));


