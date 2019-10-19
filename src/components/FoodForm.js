import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FoodForm extends Component {

    render() {
        const useStyles = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
            },
            input: {
                display: 'none',
            },
        }));

        return (
            <Col className='home-comp'>
                <div className='home-content' id='food-form'>
                    <Card>
                        <Card.Body>
                            <Card.Title>pick some cuisines!</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">whatcha feelin' today?</Card.Subtitle>
                            <Card.Text>
                                <Button variant="contained" className={useStyles.button}>
                                    Default
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        );
    }
}

export default FoodForm;