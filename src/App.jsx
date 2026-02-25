import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/Scrollbar.css';
import Home from './Home.jsx'
import Trips from './Trips.jsx'
import Albums from './Albums.jsx'
import Cinema from './Cinema.jsx'
import Germany from './Germany.jsx'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trips" element={<Trips/>}/>
        <Route path="/trips/germany" element={<Germany/>}/>
        <Route path="/albums" element={<Albums/>}/>
        <Route path="/cinema" element={<Cinema/>}/>
      </Routes>
    </Router>
  );
}

export default App;


