import Header from '@/components/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div> {/* Make the parent a flex container */}
      <div className="grid-background"></div>
      <main className="min-h-screen container"> {/* Allow main to grow and take available space */}
        <Header />
        <Outlet />
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'> {/* Use footer tag for semantic HTML */}
        Made with love by Joboyage
      </>
    </div>
  );
};

export default AppLayout;