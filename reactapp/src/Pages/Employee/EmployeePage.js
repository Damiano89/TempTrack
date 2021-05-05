import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Link } from "react-router-dom";

class EmployeePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <Form id="formContent">
      <FormGroup>
        <Label for="name">Employee Full Name</Label>
        <Input type="text" name="name" id="name" placeholder="Full Name" />
      </FormGroup>
      <FormGroup>
        <Label for="temperature">Temperature</Label>
        <Input type="number" step="0.1" name="temperature" id="temperature" placeholder="Temperature" />
      </FormGroup>
      <FormGroup>
        <Label for="vaccinated">Vaccinated?</Label>
        <Input type="select" name="vaccinated" id="vaccine">
          <option>YES</option>
          <option>NO</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Notes:</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button><Link id="buttons" to="">Submit</Link></Button>
    </Form>
    );
  }
}

export default EmployeePage;