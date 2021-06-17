import React, {useState, useEffect} from 'react'
import { API, Auth } from 'aws-amplify';
import { createWarehouse as createWarehouseMutation } from '../../../graphql/mutations';
import { listCompanys, listWarehouses } from '../../../graphql/queries';
import moment from 'moment';

//UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'




const initialFormState = { name: '', companyID: '' }

function Warehouse() {
  const [formData, setFormData] = useState(initialFormState);
  let [user, userState] = useState([]); 
  let [warehouses, setWarehouses] = useState([]);
  let [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');

   
  useEffect(() => {
    async function getUserData(){
      const userInfo = await Auth.currentUserInfo();
      const userData =  userInfo.attributes;
      userState(userData);
    }
   getUserData();
   fetchWarehouses();
   fetchCompanies();
 
  }, []);
  
  const handleChange = (event) => {
   
    if(event.target.name === 'company'){
      setSelectedCompany(event.target.value);
    }
    
  };
  
  
  async function fetchCompanies(){
    const apiData = await API.graphql({ query: listCompanys });
    setCompanies(apiData.data.listCompanys.items);
  }
  

  async function fetchWarehouses(){
    const apiData = await API.graphql({ query: listWarehouses });
    setWarehouses(apiData.data.listWarehouses.items);
    
    console.log(warehouses);
  }

  async function createWarehouse() {
    if (!formData.name || !formData.companyID) return;
        await API.graphql({ query: createWarehouseMutation, variables: { input: formData } });
        //  setNotes([ ...notes, formData ]);
        setFormData(initialFormState);
  }
  
    return (
        <>
        <h2>{user.username}</h2>
        <div className="form">
          <TextField
            className="form-input" 
            onChange={e => setFormData({ ...formData, 'name': e.target.value })}
            placeholder="Warehouse name"
            value={formData.name} />
          
          <InputLabel id="company">Company</InputLabel>
          <Select
            labelId="company"
            value={formData.companyID}
            onChange={e => setFormData({ ...formData, 'companyID': e.target.value})}
          >
            {companies.map((company) => (
              <MenuItem  key={company.id || company.name} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        
          <Button onClick={createWarehouse} variant="contained" color="primary">Create Warehouse</Button>
        </div>
        
        <div>
          <h3>Warehouse Lists</h3>
          <div> 
          {
          warehouses.map(warehouse => (
            <Card className="" key={warehouse.id || warehouse.name}>
              <CardContent>

                <Typography variant="h4" component="p">
                  {warehouse.name}
                </Typography>
                <Typography className="" color="textSecondary" gutterBottom>
                  {moment(warehouse.createdAt).fromNow()}
                </Typography>

                <Typography variant="body2" component="p">
                  Owned by the following company {warehouse.companyID}

                </Typography>
              </CardContent>
        
           
            </Card>


          ))
        }
          </div>
        </div>
        </>
    )
}

export default Warehouse


