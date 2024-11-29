import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { PacmanLoader } from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <PacmanLoader className='mb-4' width={'100%'} color='#36d7b7' />
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>
    I am a...
  </h2>
  <div className='mt-16 grid grid-cols-2 '>

  </div>
    </div>
  );
}

export default Onboarding;