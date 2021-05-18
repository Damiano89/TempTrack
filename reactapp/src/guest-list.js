import React, { Component } from 'react';
import './Pages/Employee/EmployeePage';
import axios from 'axios';
import './NavBar.css';

var today = new Date(),
date = today.getMonth() + '-' + (today.getDate() + 1) + '-' + today.getFullYear();

export default class GuestList extends Component {
        
        state = {
        name: '',
        temperature: '',
        vaccine: '',
        notes: '',
        temps: [],
        currentDateTime: date
      };

    componentDidMount = () => {
        this.getGuestTemp();
      };

    getGuestTemp = () => {
        axios.get('/guestApi')
          .then((response) => {
            const data = response.data;
            this.setState({ temps: data });
            console.log('Data has been received!!');
          })
          .catch(() => {
            alert('Error retrieving data!!!');
          });
    }

      displayGuestTemp = (temps) => {

        if (!temps.length)return null;
    
        return temps.map((temp, index) => (
          <div>
            <div key={index}>
                <div>
                    <h4>{temp.name}</h4>
                </div>
                <p>
                    <h6>
                Temperature: {temp.temperature}<br />
                Vaccinated: {temp.vaccine}<br />
                Notes: {temp.notes}<br />
                    </h6>
                </p>
            </div>
          </div>
        ));
    }

    render() {
        return (
            <div className="tempList">
                <div>
                    <h4 id="title">Guest's Temperatures of {this.state.currentDateTime}:</h4>
                        {this.displayGuestTemp(this.state.temps)}
                </div>
            </div>
        );
    }
}
