import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { API, Auth } from 'aws-amplify';
import { createWarehouse as createWarehouseMutation } from '../../../graphql/mutations';
import { useEffect } from 'react';

const initialFormState = { name: '', country: '', city: '', street: '', url:'',  owner: '' }

function Warehouse() {
  const [formData, setFormData] = useState(initialFormState);
  let [user, userState] = useState([]);   
   
  useEffect(() => {
    async function getUserData(){
      const userInfo = await Auth.currentUserInfo();
      const userData =  userInfo.attributes;
      userState(userData);
    }
   getUserData();
 
  }, []);
  
  


  async function createCompany() {
    if (!formData.name || !formData.country || !formData.city || !formData.street) return;
    formData.owner = user.email;
        await API.graphql({ query: createCompanyMutation, variables: { input: formData } });
        //  setNotes([ ...notes, formData ]);
        setFormData(initialFormState);
  }
  
    return (
        <>
        <h2>{user.name}</h2>
        <div className="form">
          <TextField
            className="form-input" 
            onChange={e => setFormData({ ...formData, 'name': e.target.value })}
            placeholder="Company name"
            value={formData.name} />
          <TextField 
            className="form-input"
            onChange={e => setFormData({ ...formData, 'country': e.target.value })}
            placeholder="Country of Company"
            value={formData.country} />
            <TextField 
            className="form-input"
            onChange={e => setFormData({ ...formData, 'city': e.target.value })}
            placeholder="City of Company"
            value={formData.city} />
            <TextField 
            className="form-input"
            onChange={e => setFormData({ ...formData, 'street': e.target.value })}
            placeholder="Country of Street"
            value={formData.street} />
             <TextField 
            className="form-input"
            onChange={e => setFormData({ ...formData, 'url': e.target.value })}
            placeholder="https://"
            value={formData.url} />
          <Button onClick={createCompany} variant="contained" color="primary">Create Company</Button>
        </div>
        </>
    )
}

export default Warehouse


