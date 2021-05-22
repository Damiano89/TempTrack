import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

var today = new Date(),
date = today.getMonth() + '-' + today.getDate() + '-' + today.getFullYear();

class GuestPage extends React.Component {
  state = {
    name: '',
    date: '',
    temperature: '',
    vaccine: '',
    notes: '',
    temps: []
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

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ 
      [name]: value 
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      date: date,
      temperature: this.state.temperature,
      vaccine: this.state.vaccine,
      notes: this.state.notes
    };

    axios({
      url: '/guestApi/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        alert('Data successfully inserted!');
        this.resetUserInputs();
        this.getGuestTemp();
      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      date: '',
      temperature: '',
      vaccine: '',
      notes: ''
    });
  };

  displayGuestTemp = (temps) => {

    if (!temps.length)return null;

    return temps.map((temp, index) => (
      <div key={index}>
        <h3>{temp.name}</h3>
        <p>
          {temp.date}<br />
          {temp.temperature}<br />
          {temp.vaccine}<br />
          {temp.notes}<br />
        </p>
      </div>
    ));
};

  render() {

    console.log('State: ', this.state);

  return (
    <Form onSubmit={this.submit} id="formContent">
      <FormGroup>
        <Label for="name">Guest Full Name</Label>
          <Input required type="text" name="name" id="name" placeholder="Full Name"  value={this.state.name} onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
      <Label for="temperature">Temperature</Label>
      <Input required type="number" step="0.1" name="temperature" id="temperature" placeholder="Temperature" value={this.state.temperature} onChange={this.handleChange}/>
      </FormGroup>
        <FormGroup>
          <Label for="vaccinated" >Vaccinated? (Yes/No)</Label>
            <Input required type="text" name="vaccine" id="vaccine" value={this.state.vaccine} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes:</Label>
            <Input type="text" name="notes" id="notes" value={this.state.notes} onChange={this.handleChange}/>
        </FormGroup>
        <Button>Submit</Button>
    </Form>
    );
  }
}
export default GuestPage;