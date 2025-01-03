import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Profile from "./pages/Profile/profile.jsx"; 
import CharacterSelect from './pages/CharacterSelect/characterselect.jsx';
import Inventory from './pages/Inventory/inventory.jsx';
import Spellbook from './pages/Spellbook/spellbook.jsx';
import Combat from './pages/Combat/combat.jsx';
import Notes from './pages/Notes/notes.jsx';
import './App.css'
import Navbar from './pages/Navbar/navbar.jsx';

function App() {
  

  return (
    <Router>
      <div className="App">
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characterselect" element={<CharacterSelect />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/combat" element={<Combat />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/spellbook" element={<Spellbook />} /> 
        <Route path="/notes" element={<Notes />} />


      </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App
