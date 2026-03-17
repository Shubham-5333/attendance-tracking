import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard';

const App = () => {

  // const location = useLocation()
  // const hideLayout =  location.pathname === ''
  return (
    <>
      {/* <Routes> */}
      <Sidebar />
      <Navbar />
      <Dashboard/>
      {/* </Routes> */}

    </>
  );
}

export default App;
