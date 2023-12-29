import React from 'react';
import Dashboard from './components/dashbord/Dashboard';
import { Outlet } from 'react-router-dom';
import Navbar from './components/dashbord/Nabvar';

const App = () => {
  return (
    <div>
     <Navbar/>
      <Dashboard/>
      <Outlet/>
     
    </div>
  );
};

export default App;
