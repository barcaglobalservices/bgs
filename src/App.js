import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './pages';
import About from './pages/about'
import Blog from './pages/blog'
import Company from './pages/company'
import Admin from './pages/admin'
import Auth from '@aws-amplify/auth';
import {SnackbarProvider} from 'notistack';




const App = () => {
  const [user, setUser] = useState()
  
 
  

  useEffect(() => {
    async function getUserData(){
      const userInfo = await Auth.currentUserInfo();
      const userName = userInfo.username;
      setUser(userName);
    }
   getUserData();
  }, []);
  
  

  
  return (
    <Router useSuspense={false}>
          <Navbar user={user} />   
     
        <div className="container">
      <SnackbarProvider maxSnack={3}
         classes={{
          variantSuccess: "fontColor:'white'",
       
      }}
      >
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/company' exact component={Company} />
        <Route path='/admin'  component={Admin}/>
      </Switch>
      </SnackbarProvider>
   
        </div>
    <Footer />
    </Router>
    
  );
    }

export default App;
