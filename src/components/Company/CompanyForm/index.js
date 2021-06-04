import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Form} from './CompanyElements';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));



function CompanyForm() {
    const classes = useStyles();
    return (
        <>
        <Form autoComplete="off">
                    <TextField className={classes.root} id="name" label="Name" variant="filled"/>
                    <TextField className={classes.root} id="country" label="Country" variant="filled"/>
                    <TextField className={classes.root} id="city" label="City" variant="filled"/>
                    <TextField  className={classes.root} id="street" label="Street" variant="filled"/>
                    
                    <Button variant="contained" color="primary">Add new Company</Button>

        </Form>
        </>
    )
}

export default CompanyForm


