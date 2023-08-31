import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
