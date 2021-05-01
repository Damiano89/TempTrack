import React from 'react';
import { Card, CardBody, Button, CardText, CardTitle } from 'reactstrap';
import EmployeePage from './Pages/Employee/EmployeePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";

export class EmployeeButton extends React.Component {
    render() {
        return(
                <Card className="card" style={{ width: '18rem' }}>
                <CardBody className="cardBody">
                    <CardTitle className="cardTitle">Employee</CardTitle>
                    <CardText className="cardText">
                        Check temperature of new employee and record it.
                    </CardText>
                    <Button variant="primary">
                        <Link to='/employee'>Record</Link>
                        </Button>
                </CardBody>
                </Card>

                
            );
    }
}