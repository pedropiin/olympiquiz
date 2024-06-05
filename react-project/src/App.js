import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Playing } from './pages/Playing';
import Login from './pages/Login';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/playing" element={<Playing />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
