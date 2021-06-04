import React from 'react'
import {FiChevronsRight} from 'react-icons/fi'

 const Home = () => {
    return (
      <>
        <div className="home-container">
          <h1>
            Welcome, how can we help you?
          </h1>
          <FiChevronsRight /> <input className="first_input" autofocus />
        </div>
      
      </>
    )
}

export default Home
