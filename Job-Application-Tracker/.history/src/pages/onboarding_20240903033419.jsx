import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { BarLoader } from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
if(!isLoaded){
  return <BarLoader className='mb-4' width={'100%'} color='#36d7b7' />
}

  return (
    <div>
      <h2 className=''>I am a...</h2>
    </div>
  );
}

export default Onboarding;