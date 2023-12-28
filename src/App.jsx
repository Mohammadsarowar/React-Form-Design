import React from 'react';
import Dashboard from './components/dashbord/Dashboard';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Dashboard/>
      <Outlet/>
    </div>
  );
};

export default App;
