import Header from '@/components/header';
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div flex flex-col min-h-screen->
      <div className="grid-background"></div>
      <main className="min-h-screen-container pl-20">
        <Header />
      <Outlet />
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>Made with love by JobYoyage</div>
     
    </div>
  );
};

export default AppLayout;