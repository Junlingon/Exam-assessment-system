import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Login from '@/page/login';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path='/login' element={<Login></Login>}></Route>
      </Route>

    </Routes>
  );
}

export default App;
