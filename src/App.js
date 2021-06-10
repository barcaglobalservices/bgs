import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './pages';
import About from './pages/about'
import Blog from './pages/blog'
import Company from './pages/company'
import Inventory from './pages/inventory'
import Admin from './pages/admin'
import Auth from '@aws-amplify/auth';



const App = () => {
  const [user, setUser] = useState()
  

  useEffect(() => {
    async function getUserData(){
      const userInfo = await Auth.currentUserInfo();
      const userData =  userInfo.attributes;
      const userName = userInfo.username;
      setUser(userName);
    }
   getUserData();
  }, []);
  
  

  
  return (
    <Router>
          <Navbar user={user} />   
     
        <div className="container">
       
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/company' exact component={Company} />
        <Route path='/inventory' exact component={Inventory} />
        <Route path='/admin' exact component={Admin}/>
      </Switch>
   
        </div>
    
    </Router>
    
  );
    }

export default App;
