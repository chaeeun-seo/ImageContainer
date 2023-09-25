import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Carousel } from 'flowbite';

import Home from './pages/Home';
import Detail from './pages/Detail';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter className='w-full flex flex-col justify-center items-center'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
