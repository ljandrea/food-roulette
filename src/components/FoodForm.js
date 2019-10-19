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

        const cuisines = ["American", "Thai", "Japanese", "Italian", "Chinese", "Vietnamese"];
        const foods = ["Burgers", "Pasta", "Ramen", "Sushi", "Breakfast"];

        return (
            <Col className='home-comp'>
                <div id='food-form'>
                    <Card>
                        <Card.Body>
                            <Card.Title>pick some foooood!</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">whatcha feelin?</Card.Subtitle>
                            <hr />

                            {cuisines.map((cuisine) => {
                                let idName = cuisine + "-option";
                                return <Button variant="contained" className={useStyles.button} id={idName}>
                                    {cuisine}
                                </Button>
                            })}
                            {foods.map((food) => {
                                let idName = food + "-option";
                                return <Button variant="contained" className={useStyles.button} id={idName}>
                                    {food}
                                </Button>
                            })}
                            <Card.Text>
                                selected:
                                <br />
                                {cuisines.map((cuisine) => {
                                    let idName = cuisine + "-selected";
                                    return <Button variant="contained" className={useStyles.button} id={idName}>
                                        {cuisine}
                                    </Button>
                                })}
                                {foods.map((food) => {
                                    let idName = food + "-selected";
                                    return <Button variant="contained" className={useStyles.button} id={idName}>
                                        {food}
                                    </Button>
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        );
    }
}

export default FoodForm;