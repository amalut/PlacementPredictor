import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path='form' element={<Form/>}/>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
