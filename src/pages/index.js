import React from 'react'
import {FiChevronsRight} from 'react-icons/fi'

 const Home = () => {
    return (
      <>
        <div class="home-container">
          <h1>
            Welcome, how can we help you?
          </h1>
          <FiChevronsRight /> <input class="first_input" autofocus />
        </div>
      
      </>
    )
}

export default Home
