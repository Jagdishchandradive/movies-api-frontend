import React from 'react';
import './App.css';
import axios from 'axios';
import Layout from './components/Layout';
import api from './api/axiosConfig';
import {Routes, Route} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Home from './components/home/Home';

function App() {
  const [movies,setMovies]=useState();

  const getMovies=async () =>{
    try{
      const response=await api.get("http://localhost:8080/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getMovies();

  },[])


  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route path="/" element={<Home/>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
