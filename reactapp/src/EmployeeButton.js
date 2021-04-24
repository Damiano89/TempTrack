import React from 'react';
import { Card, CardBody, Button, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class EmployeeButton extends React.Component {
    render() {
        return(
                <Card className="card" style={{ width: '18rem' }}>
                <CardBody className="cardBody">
                    <CardTitle className="cardTitle">Employee</CardTitle>
                    <CardText className="cardText">
                        Check temperature of new employee and record it.
                    </CardText>
                    <Button variant="primary">Record</Button>
                </CardBody>
                </Card>
            );
    }
}