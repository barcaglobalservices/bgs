import React, { useState, useEffect } from 'react'
import { API, Auth } from 'aws-amplify';
import { listCurrentInventorys, listProductss, listWarehouses } from '../../../graphql/queries';
import '../styles.css';
import {useSnackbar} from 'notistack';
//UI

import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import { createCurrentInventory } from '../../../graphql/mutations';

const initialFormState = { warehouseID: '', productID: '', inventoryAmount: ''}

function Inventory() {
  const [formData, setFormData] = useState(initialFormState);
  const [user, setUser] = useState([null]);
  const [inventories, setInventories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [products, setProducts] = useState([]);
  const {enqueueSnackbar} = useSnackbar();




  useEffect(() => {
    getUser();
    fetchInventories();
    fetchWarehouses();
    fetchProducts();

  }, [])

  function getUser() {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => setUser(user)
    )
      .catch(err => console.log(err));
  }

  async function fetchInventories() {
    const apiData = await API.graphql({ query: listCurrentInventorys });
    setInventories(apiData.data.listCurrentInventorys.items);
  }
  async function fetchWarehouses() {
    const apiData = await API.graphql({ query: listWarehouses });
    setWarehouses(apiData.data.listWarehouses.items);
  }
  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProductss });
    setProducts(apiData.data.listProductss.items);
  }
  
  async function addInventory(){
      if (!formData.warehouseID || !formData.productID || !formData.inventoryAmount) return;
      await API.graphql({ query: createCurrentInventory, variables: { input: formData } });
      setInventories([...inventories, formData]);
      setFormData(initialFormState);
      enqueueSnackbar('Succesfully added the inventory.', {variant: 'success'})
  }



  return (

    <>
      <div className="addSection">
        <div className="form">
          <FormControl>
            <InputLabel id="warehouse">Warehouse</InputLabel>
            <Select
              labelId="warehouse"
              value={formData.warehouseID}
              onChange={e => setFormData({ ...formData, 'warehouseID': e.target.value })}
            >
              {warehouses.map((warehouse) => (
                <MenuItem key={warehouse.id || warehouse.name} value={warehouse.id}>
                  {warehouse.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="product">Products</InputLabel>
            <Select
              labelId="product"
              value={formData.productID}
              onChange={e => setFormData({ ...formData, 'productID': e.target.value })}
            >
              {products.map((product) => (
                <MenuItem key={product.id || product.name} value={product.id}>
                  {product.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
          <Input onChange={e => setFormData({ ...formData, 'inventoryAmount': e.target.value })}
                placeholder="quantity"
                type="number"
                value={formData.inventoryAmount} />
        </FormControl>
        
        <FormControl>
        <Button variant="outlined" color="primary" onClick={addInventory}>Add To Inventory</Button>
        </FormControl>



        </div>
      </div>
      <h1>Inventory</h1>
      {
        inventories.map(inventory => (
          <div key={inventory.productID}>
              <h3>{inventory.warehouseID}</h3>
              <h3>{inventory.productID}</h3>
              <h4>{inventory.inventoryAmount}</h4>
          </div>

        ))
      }
    </>
  )
}

export default Inventory


