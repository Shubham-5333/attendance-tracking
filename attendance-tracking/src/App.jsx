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
     <div className="app-layout">
    <Sidebar />
    
    <div className="main-content">
        <Navbar />
        <Dashboard />
    </div>
</div>
      {/* </Routes> */}

    </>
  );
}

export default App;
