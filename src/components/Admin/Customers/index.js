import React, { useState, useEffect } from 'react'
import { API, Auth } from 'aws-amplify';
import { listCustomers } from '../../../graphql/queries';




function Customers() {
    const [user, setUser] = useState([null]);    
    const [customers, setCustomers] = useState([]);



    useEffect(() => {
        getUser();
        fetchCustomers();
    }, [])
    
    function getUser() {
        Auth.currentAuthenticatedUser({
          bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => setUser(user)
        )
          .catch(err => console.log(err));
      }
      async function fetchCustomers() {
        const apiData = await API.graphql({ query: listCustomers });
        setCustomers(apiData.data.listCustomers.items);
        
    }

   
    
    return (
       
        <>
            
              <h1>Customers - {user.username}</h1>
              
              {
          customers.map(customer => (
              <h4>{customer.ID}</h4>
          ))
}
        </>
    )
}

export default Customers


