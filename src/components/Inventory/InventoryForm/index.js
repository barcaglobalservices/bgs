import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import { API } from 'aws-amplify';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { listProductss, listCompanys} from '../../../graphql/queries';



const initialFormState = { inventoryProductId: '', inventoryCompanyId: '', price: '', quantity: ''}

function InventoryForm() {
  const [formData, setFormData] = useState(initialFormState);
    const [products, setProducts] = useState([]);
    const [companies, setCompany] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');


    useEffect(() => {
        fetchProducts();
        fetchCompanies();
    }, [])
    
    const handleChange = (event) => {
      if(event.target.name === 'product'){
        setSelectedProduct(event.target.value);
      }
      
      if(event.target.name === 'company'){
        setSelectedCompany(event.target.value);
      }
      
    };
    
    
    
    async function fetchProducts(){
        const apiData = await API.graphql({ query: listProductss });
        setProducts(apiData.data.listProductss.items);
        
      }
      
      async function fetchCompanies(){
        const apiData = await API.graphql({ query: listCompanys });
        setCompany(apiData.data.listCompanys.items);
      }
      
      
  async function addToInventory() {
   
 
    formData.inventoryProductId = selectedProduct;
    formData.inventoryCompanyId = selectedCompany;
    console.log(formData);
        //  setNotes([ ...notes, formData ]);
  }
  
    return (
        <>
        <div className="form">
        <FormControl>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="product"
            value={selectedProduct}
            onChange={handleChange}
          >
            {products.map((product) => (
              <MenuItem  value={product.id}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="company">Company</InputLabel>
          <Select
            labelId="company"
            id="company"
            name="company"
            value={selectedCompany}
            onChange={handleChange}
          >
            {companies.map((company) => (
                <MenuItem  value={company.id}>
              {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
         
            <TextField 
            className="form-input"
            onChange={e => setFormData({ ...formData, 'price': e.target.value })}
            placeholder="Price"
            value={formData.price} />
            <TextField 
            className="form-input"
            onChange={e => setFormData({ ...formData, 'quantity': e.target.value })}
            placeholder="Quantity"
            value={formData.quantity} />
          <Button onClick={addToInventory} variant="contained" color="primary">Add Inventory</Button>
        </div>
        </>
    )
}

export default InventoryForm


