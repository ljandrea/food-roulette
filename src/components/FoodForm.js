import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class FoodForm extends Component {
    useStyles = () => {
        return makeStyles(theme => ({
            root: {
                padding: theme.spacing(3, 2),
            },
        }));
    }

    render() {
        const classes = this.useStyles();

        return (
            <Col id='food-form'>
                {/* <Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
        </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
        </Typography>
                </Paper> */}

            </Col>
        );
    }
}

export default FoodForm;