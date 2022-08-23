import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
// eslint-disable-next-line import/extensions
import Missions from './components/missions/Missions.js';
import Rockets from './components/rockets/rockets';
import Nav from './components/pages/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
