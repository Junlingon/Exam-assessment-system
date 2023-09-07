import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import { routersData } from './config';

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path='/' element={<Navigate to={'./login'}></Navigate>}></Route>
        {routersData.map((route) =>
          <Route key={route.path} path={route.path} element={route.element()}></Route>
        )}
      </Route>
    </Routes>
  );
}

export default App;
