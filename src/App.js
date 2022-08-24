import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from './components/myProfile/myProfile';
import Missions from './components/missions/missions';
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
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
