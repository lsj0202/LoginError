import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/oauth2/code/google" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
