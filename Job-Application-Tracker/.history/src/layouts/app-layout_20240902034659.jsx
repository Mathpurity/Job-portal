import Header from '@/components/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Make the parent a flex container */}
      <div className="grid-background"></div>
      <main > {/* Allow main to grow and take available space */}
        <Header />
        <Outlet />
      </main>
      <footer className='p-10 text-center bg-gray-800 mt-10'> {/* Use footer tag for semantic HTML */}
        Made with love by JobVoyage
      </footer>
    </div>
  );
};

export default AppLayout;