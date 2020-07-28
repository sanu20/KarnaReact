import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './component/Header';
import Devil from './component/Devil';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUs from './container/ContactUs';
import Frontend from './container/Frontend';
import AboutUs from './container/AboutUs';

function App() {
  return (
   <Router>
      <div className="App">
      <Header />
      <Devil />
      <Route path="/"exact component={Home}/>
      <Route path="/contact-us" component={ContactUs}/>
      <Route path="/frontend" component={Frontend}/>
      <Route path="/about-us" component={AboutUs}/>
      <Navbar />
    </div>
   </Router>
  );
}

export default App;
