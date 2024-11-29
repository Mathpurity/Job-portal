import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { BeatLoader } from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
if(!isLoaded){
  return <BarLoader className='mb-4' width={'100%'} color='#36d7b7' />
}

  return (
    <div>
      <h2 className='gradient-title font-extrabold text-7x1 sm:text-8x1 tracking-tighter'>
        I am a...
        </h2>
    </div>
  );
}

export default Onboarding;