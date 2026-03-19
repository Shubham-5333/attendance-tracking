import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Employees from './pages/Employees';

const App = () => {

  const location = useLocation()
  const hideLayout = location.pathname === '/'
  return (
    <>
      {!hideLayout && <Navbar />}
      {!hideLayout && <Sidebar />}
      <div className="app-layout">
        <div className="main-content">
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/students' element={<Students />} />
            <Route path='/employees' element={<Employees />} />
          </Routes>
        </div>
      </div>

    </>
  );
}

export default App;
