import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
