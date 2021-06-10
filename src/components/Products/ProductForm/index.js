import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { API } from 'aws-amplify';
import { createProducts as createProductsMutation } from '../../../graphql/mutations';





const initialFormState = { name: '', description: '' }

function ProductForm() {
    const [formData, setFormData] = useState(initialFormState);

    async function createProduct() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createProductsMutation, variables: { input: formData } });
        //  setNotes([ ...notes, formData ]);
        setFormData(initialFormState);
    }
    
    return (

        <>
            <TextField onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Product name"
                value={formData.name} />
            <TextField  onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note descriptoin"
        value={formData.description} />
            <Button onClick={createProduct} variant="contained" color="primary">Create Product</Button>

        </>
    )
}

export default ProductForm


