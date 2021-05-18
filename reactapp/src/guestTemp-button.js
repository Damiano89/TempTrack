import React from 'react';
import { Card, CardBody, Button, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link } from "react-router-dom";

export class GuestTempButton extends React.Component {
    render() {
        return(
                <Card className="card">
                <CardBody className="cardBody">
                    <CardTitle className="cardTitle">Guest's List</CardTitle>
                    <Button><Link id="buttons" to='/guestList'>Check List</Link></Button>
                </CardBody>
                </Card>
        );
    }
}