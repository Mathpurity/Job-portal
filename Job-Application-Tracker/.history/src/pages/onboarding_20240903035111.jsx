import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { MoonLoader } from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
if(!isLoaded){
  return <MoonLoader className='mb-4' width={'100%'} color='#36d7b7' />
}

  return (
    jsx
<div>
  <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>
    I am a...
  </h2>
</div>
  );
}

export default Onboarding;