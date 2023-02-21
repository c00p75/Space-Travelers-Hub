import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rockets from './components/Rockets/Rockets';
import MissionsList from './components/Mission/MissionsList';
import Dragons from './components/Dragons/Dragons';
import RocketSpecs from './components/Rockets/RocketSpecs';
import MyProfile from './components/MyProfile/MyProfile';
import DragonSpecs from './components/Dragons/DragonSpecs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions/*" element={<MissionsList />} />
        <Route exact path="/dragons" element={<Dragons />} />
        <Route exact path="/myProfile/*" element={<MyProfile />} />
        <Route path="/rockets/:id" element={<RocketSpecs />} />
        <Route path="/dragons/:id" element={<DragonSpecs />} />
      </Routes>
    </>
  );
}

export default App;
