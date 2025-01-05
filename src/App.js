import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';

import Header from './Component/Header';
import Home from './Component/Home';
import Banner from './Component/Banner';

import Login from './Component/Login';
import List from './Component/List';
import HLog from './Component/HLog';
import Forget from './Component/Forget';

import './App.scss';

function App() {
  return (
    <React.Fragment>
      
    <Router>
      <Header/>



      <Routes>


        <Route path="/" element={
          <React.Fragment>
            
          
            <Home/>
          </React.Fragment>
        }/>



        <Route path="/login" element={
          <React.Fragment>
              
            <HLog/>
            <Login title={true} tit="Login"/>
          </React.Fragment>
        }/>



         <Route path="/register" element={
          <React.Fragment>
           
            <HLog/>
            <Login title={false} tit={"Register"}/>
          </React.Fragment>
        }/>
      
        <Route path="/dashboard" element={
          <React.Fragment>
            
            <Banner/>
            
          </React.Fragment>
        }/>

<Route path="/forget-pass" element={
          <React.Fragment>
           
            <HLog/>
            <Forget/>
          </React.Fragment>
        }/>



      </Routes>




    </Router>
  </React.Fragment>


  
  
         
  );
}

export default App;
