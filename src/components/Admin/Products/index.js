import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { API, Auth } from 'aws-amplify';
import { createProducts as createProductsMutation, deleteProducts as deleteProductsMutation } from '../../../graphql/mutations';
import { listProductss } from '../../../graphql/queries';
import {useSnackbar} from 'notistack';
import moment from 'moment';

import '../styles.css';


//UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const initialFormState = { name: '', model:'', description: '', owner: '' }

function Products() {
    const [formData, setFormData] = useState(initialFormState);
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);
    const {enqueueSnackbar} = useSnackbar();


    useEffect(() => {
        fetchProducts();
        getUser();
        
    }, [])
    
    function getUser() {
        Auth.currentAuthenticatedUser({
          bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => setUser(user)
        )
          .catch(err => console.log(err));
      }

    async function createProduct() {
        console.log(user.username);
        formData.owner = user.username;
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createProductsMutation, variables: { input: formData } });
        //  setNotes([ ...notes, formData ]);
        setFormData(initialFormState);
    }

    async function fetchProducts() {
        const apiData = await API.graphql({ query: listProductss });
        setProducts(apiData.data.listProductss.items);
    }
    
    async function deleteProduct({id}){
      const newProductsArray = products.filter(product => product.id !== id);
      setProducts(newProductsArray);
      await API.graphql({ query: deleteProductsMutation, variables: { input: { id } } });
      enqueueSnackbar('You deleted the product succesfully.', {variant: 'success'});
    }
    
    return (
       
        <>
            <TextField onChange={e => setFormData({ ...formData, 'name': e.target.value })}
                placeholder="Product name"
                value={formData.name} />
            <TextField onChange={e => setFormData({ ...formData, 'model': e.target.value })}
                placeholder="Product model"
                value={formData.model} />
            <TextField onChange={e => setFormData({ ...formData, 'description': e.target.value })}
                placeholder="Product descriptoin"
                value={formData.description} />
            <Button onClick={createProduct} variant="contained" color="primary">Create Product</Button>
            
            
            <div className="cardSection">
            {
          products.map(product => (
            <Card className="card" key={product.id || product.name}>
              <CardContent>

                <Typography variant="h4" component="p">
                  {product.name}
                </Typography>
                <Typography className="" color="textSecondary" gutterBottom>
                  {moment(product.createdAt).fromNow()}
                </Typography>

                <Typography variant="body2" component="p">
                  {product.description}

                </Typography>
              </CardContent>
        
              <CardActions>
                <Button size="small" variant="outlined" color="secondary" onClick={() => deleteProduct(product)}>Complete Feature</Button>
              </CardActions>
            </Card>


          ))
        }
            </div>
        </>
    )
}

export default Products


