import React, { useState, useEffect } from 'react'
import { API, Auth } from 'aws-amplify';
import { listOrders } from '../../../graphql/queries';



const initialFormState = { name: '', model:'', description: '', owner: '' }

function Orders() {
    const [formData, setFormData] = useState(initialFormState);
    const [user, setUser] = useState([null]);
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        getUser();
        fetchOrders();
    }, [])
    
    function getUser() {
        Auth.currentAuthenticatedUser({
          bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => setUser(user)
        )
          .catch(err => console.log(err));
      }
      
      async function fetchOrders() {
        const apiData = await API.graphql({ query: listOrders });
        setOrders(apiData.data.listOrders.items);
    }

   
    
    return (
       
        <>
            
              <h1>Orders</h1>
              
              
              {
          orders.map(order => (
              <h4>{order.ID}</h4>
          ))
}
        </>
    )
}

export default Orders


