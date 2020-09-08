import React from 'react';
import './App.css';
import Home from './containers/Home/index';
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import ContactUS from './containers/ContactUs/index';
import Post from './containers/Post/index';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; ;

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Hero/>
      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" component={ContactUS}/>
      <Route path="/post/:slug" component={Post}/>

      </div>


    </Router>
      );
}

export default App;
