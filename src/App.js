import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './pages';
import About from './pages/about'

function App() {
  return (
    <Router>
      <Navbar />
     
        <div class="container">
          
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
      </Switch>
        </div>
       
    </Router>
  );
}

export default App;
