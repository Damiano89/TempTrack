import React from 'react';
import axios from 'axios';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var today = new Date(),
date = today.getMonth() + '-' + today.getDate() + '-' + today.getFullYear();

export default class GuestList extends React.Component {
        
        state = {
        name: '',
        date: date,
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
                    <h4 id="nameList">{temp.name}</h4>
                </div>
                <p>
                    <h6 id="valuesList">
                Date: {this.state.date}<br />
                Temperature: {(temp.temperature > 99) ? <h8 className="fever">{temp.temperature}</h8> : <h8 className="noFever">{temp.temperature}</h8>}<br />
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
              <h3 id="time">Today's Date: {this.state.currentDateTime}</h3>
                <div>
                    <h4 id="title">Guest's Temperatures:</h4>
                        {this.displayGuestTemp(this.state.temps)}
                </div>
            </div>
        );
    }
}
