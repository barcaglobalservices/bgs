import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './pages';
import About from './pages/about'
import Blog from './pages/blog'
import Company from './pages/company'
import Inventory from './pages/inventory'


function App() {
  return (
    <Router>
      <Navbar />   
      
     
        <div className="container">
          
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/company' exact component={Company} />
        <Route path='/inventory' exact component={Inventory} />
      </Switch>
   
        </div>
    </Router>
    
  );
}

export default App;
