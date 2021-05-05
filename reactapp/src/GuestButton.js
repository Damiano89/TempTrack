import React from 'react';
import './NavBar.css';
import { Card, CardBody, Button, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Link } from "react-router-dom";

export class GuestButton extends React.Component {
    render() {
        return(
            <Card className="card" style={{ width: '20rem' }}>
            <CardBody className="cardBody">
                <CardTitle className="cardTitle">Guest</CardTitle>
                <CardText className="classText">
                    Check temperature of new guest and record it.
                </CardText>
                <Button><Link id="buttons" to='/guest'>Record</Link></Button>
            </CardBody>
            </Card>
            );
    }
}