import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { API, Auth } from 'aws-amplify';
import { listCompanys } from '../../../graphql/queries';
import {createCompany as createCompanyMutation} from '../../../graphql/mutations';

//UI
import Button from '@material-ui/core/Button'



const initialFormState = { name: '', country: '', city: '', street: '', url:'',  owner: '' }

function Company() {
    const [formData, setFormData] = useState(initialFormState);
    const [user, setUser] = useState([null]);
    const [companies, setCompanies] = useState([]);


    useEffect(() => {
        getUser();
        fetchCompanies();
        
    }, [])
    
    function getUser() {
        Auth.currentAuthenticatedUser({
          bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => setUser(user)
        )
          .catch(err => console.log(err));
      }

      async function fetchCompanies() {
        const apiData = await API.graphql({ query: listCompanys });
        setCompanies(apiData.data.listCompanys.items);
    }
    
    async function createCompany() {
      if (!formData.name || !formData.country || !formData.city || !formData.street) return;
      formData.owner = user.email;
          await API.graphql({ query: createCompanyMutation, variables: { input: formData } });
          //  setNotes([ ...notes, formData ]);
          setFormData(initialFormState);
    }
   
    
    return (
       
        <>
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
            
              <h1>Company</h1>
              
              {
          companies.map(company => (
            <div key={company.id}>
              <h4>{company.name}</h4>
            </div>
              
          ))
}
        </>
    )
}

export default Company


