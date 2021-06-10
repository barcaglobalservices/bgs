import React, {useEffect, useState} from 'react'
import ProductForm from '../components/Products/ProductForm'
import {withAuthenticator} from '@aws-amplify/ui-react';

import {Button} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { API } from 'aws-amplify';
import { listProductss } from '../graphql/queries';
import { deleteProducts as deleteProductsMutation } from '../graphql/mutations';





 function Products(){
  const [products, setProducts] = useState([]); 
    
    useEffect(() => {
      fetchProducts();
    }, []);
    
   
    
    async function fetchProducts(){
      const apiData = await API.graphql({ query: listProductss });
      setProducts(apiData.data.listProductss.items);
    }
    async function deleteProduct({id}) {
      
      await API.graphql({ query: deleteProductsMutation, variables: { input: { id } }});
      const newProductsArray = products.filter(product => product.id !== id);
      setProducts(newProductsArray);
      
    }
    
    
    
    return (
      <>
        <div>
         <h1>
             Check your inventory here.
         </h1>
        <ProductForm />
        
        
          <h1>All Products</h1>



    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="left">description</TableCell>
            <TableCell align="left">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell align="left">{product.name}</TableCell>
              <TableCell align="left">{product.description}</TableCell>
              <TableCell align="left">
                <Button onClick={() => deleteProduct(product)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

        
      </>
    )
}

export default withAuthenticator(Products);
