import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Casquito1 } from './Components/Casquito1';
import { Casquito2 } from './Components/Casquito2';
import { Casquito3 } from './Components/Casquito3';
import { Casquito4 } from './Components/Casquito4';
import { Casquito5 } from './Components/Casquito5';
import { Casquito6 } from './Components/Casquito6';
import { Navigation } from './Components/Navigation';

function App() {

  return (
    <div className='zonatrabajo'>
      <BrowserRouter>
        <div>
              <h1 id='title' className='text-center my-3'>Galeria Mishi</h1>
        </div>
        <div id='main-img-container' className='container'>
        <Routes>
            <Route path='/mishi1' element = {<Casquito1 className= '.image-size'/>} />
            <Route path='/mishi2' element = {<Casquito2 className= '.image-size'/>} />
            <Route path='/mishi3' element = {<Casquito3 className= '.image-size'/>} />
            <Route path='/mishi4' element = {<Casquito4 className= '.image-size'/>} />
            <Route path='/mishi5' element = {<Casquito5 className= '.image-size'/>} />
            <Route path='/mishi6' element = {<Casquito6 className= '.image-size'/>} />
        </Routes>
        </div>
        <div className='container'>
        <Navigation />
        </div >
      </BrowserRouter>
    </div>
  )
}

export default App
