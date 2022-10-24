import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './pages/Home/HomeNav';
import Register from './pages/Register';
import Logout from './pages/Logout';

const App = function() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
