import React from 'react';
import { Card, CardBody, Button, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link } from "react-router-dom";

export class EmployeeButton extends React.Component {
    render() {
        return(
                <Card className="card" style={{ width: '20rem' }}>
                <CardBody className="cardBody">
                    <CardTitle className="cardTitle">Employee</CardTitle>
                    <CardText className="cardText">
                        Check temperature of new employee and record it.
                    </CardText>
                    <Button><Link id="buttons" to='/employee'>Record</Link></Button>
                </CardBody>
                </Card>
        );
    }
}