import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TeamSelector from './components/TeamSelector';
import Login from './components/Login';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/team-selector" element={<TeamSelector />} />
        <Route path="/:teamId/matches" element={<MatchList />} />
        <Route path="/:teamId/players" element={<PlayerList />} />
      </Routes>
    </Router>
  );
}

export default App;
