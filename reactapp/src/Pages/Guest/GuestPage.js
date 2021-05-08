import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../../NavBar.css';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class GuestPage extends React.Component {
    render() {
      return (
        <Form id="formContent">
      <FormGroup>
       <Label for="name">Guest Full Name</Label>
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
      <Button>Submit</Button>
    </Form>
    );
  }
}

export default GuestPage;