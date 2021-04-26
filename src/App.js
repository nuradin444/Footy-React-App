import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home'
import SignUp from './Components/pages/SignUp'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/services'component={Services}/>
        <Route path='/sign-up'component={SignUp}/>
        <Route path='/products'component={Products}/>
      </Switch>
      </Router>
    </>
  );
}

export default App;
