import React, {useEffect, useState} from 'react'
import {withAuthenticator} from '@aws-amplify/ui-react';

import {Button} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  InventoryForm from '../components/Inventory/InventoryForm'






 function Inventory(){
  const [inventorys, setInventory] = useState([]); 
    
    useEffect(() => {

      fetchInventory();
    }, []);
    
   
    
    async function fetchInventory(){
      setInventory(["still working on it"]);
      console.log("Needs to be reimplementend");
    }
    
    async function deleteInventory({id}){
    console.log("please implement invenotry");
    }
    
    
    
    return (
      <>
        <div>
         <h1>
             Check your inventory here.
         </h1>
  <InventoryForm />        
        
          <h1>All Products</h1>



    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">quantity</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventorys.map((inventory) => (
            
            <TableRow key={inventory.id}>
              <TableCell align="left">{inventory.Product}</TableCell>
              <TableCell align="left">{inventory.Company}</TableCell>
              <TableCell align="left">{inventory.quantity}</TableCell>
              <TableCell align="left">{inventory.price}</TableCell>

              <TableCell align="left">
                <Button onClick={() => deleteInventory(inventory)}>Delete</Button>
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

export default withAuthenticator(Inventory);
