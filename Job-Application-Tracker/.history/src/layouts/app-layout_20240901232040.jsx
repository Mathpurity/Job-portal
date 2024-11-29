import Header from '@/components/header';
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen-container pl-20">
        <Header />
      <Outlet />
      </main>
      <div className=''>Made with love by JobYoyage</div>
     
    </div>
  );
};

export default AppLayout;