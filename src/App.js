import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" name="Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
