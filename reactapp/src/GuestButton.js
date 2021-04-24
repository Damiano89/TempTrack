import React from 'react';
import { Card, CardBody, Button, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class GuestButton extends React.Component {
    render() {
        return(
            <Card className="card" style={{ width: '18rem' }}>
            <CardBody className="cardBody">
                <CardTitle className="cardTitle">Guest</CardTitle>
                <CardText className="classText">
                    Check temperature of new guest and record it.
                </CardText>
                <Button variant="primary">Record</Button>
            </CardBody>
            </Card>
            );
    }
}