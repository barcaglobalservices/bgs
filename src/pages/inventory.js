import React from 'react'
import {FiChevronsRight} from 'react-icons/fi'
import { withAuthenticator } from '@aws-amplify/ui-react';

 const Inventory = () => {
    return (
      <>
        <div class="home-container">
         <h1>
             Check your inventory here.
         </h1>
        </div>
      
      </>
    )
}

export default withAuthenticator(Inventory);
