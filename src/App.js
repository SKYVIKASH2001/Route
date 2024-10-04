import React from 'react';
import Home from './compo/Home';
import{ BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './compo/About';
import Index from './compo/Index';
import Navbar from './compo/Navbar';

function App(props) {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/index' element={<Index/>}></Route>

    </Routes>
    </BrowserRouter>
      
      
      
    </>
  );
}

export default App;