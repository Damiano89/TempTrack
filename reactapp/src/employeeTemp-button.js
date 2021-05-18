import React from 'react';
import { Card, CardBody, Button, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link } from "react-router-dom";

export class EmployeeTempButton extends React.Component {
    render() {
        return(
                <Card className="card">
                <CardBody className="cardBody">
                    <CardTitle className="cardTitle">Employee's List</CardTitle>
                    <Button><Link id="buttons" to='/employeeList'>Check List</Link></Button>
                </CardBody>
                </Card>
        );
    }
}