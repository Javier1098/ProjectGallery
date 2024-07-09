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
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/mishi1' element = {<Casquito1 />} />
          <Route path='/mishi2' element = {<Casquito2 />} />
          <Route path='/mishi3' element = {<Casquito3 />} />
          <Route path='/mishi4' element = {<Casquito4 />} />
          <Route path='/mishi5' element = {<Casquito5 />} />
          <Route path='/mishi6' element = {<Casquito6 />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
