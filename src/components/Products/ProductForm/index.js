import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-cool-form'
import { DataStore } from '@aws-amplify/datastore';
import { Products } from '../../../models';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },
}));


async function submit(values) {
    values = JSON.stringify(values)
    await DataStore.save(
        new Products({
            values
        })
    );
    alert(values)
}



const ProductForm = () => {

    const { form, getState } = useForm({
        defaultValues: { "name": "", "description": "" },
        onSubmit: values => submit(values)
    })
    
    const errors = getState("errors", { errorWithTouched: true });
    console.log(errors)

    return (

        <form ref={form} autoComplete="off" noValidate>
            <TextField  name="name" label="Name" variant="filled" required error={errors.name}/>
            <TextField name="description" label="Description" variant="filled" required error={errors.desciption}/>
            <Button type="submit" variant="contained" color="primary">Add new Company</Button>
        </form>

    )
}

export default ProductForm


