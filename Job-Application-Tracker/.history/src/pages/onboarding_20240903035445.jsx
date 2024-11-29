import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { PacmanLoader } from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PacmanLoader className='mb-4' width={'100%'} color='#36d7b7' />
      </div>
    );
  }
  return (
    <div>
      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>
    I am a...
  </h2>
    </div>
  );
}

export default Onboarding;