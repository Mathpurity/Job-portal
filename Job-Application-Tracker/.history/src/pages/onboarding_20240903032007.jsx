import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { BeatLoader} from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
if(!isLoaded){
  return <BeatLoader className='mb-4' width={'100%'} color='#36d7' />
}

  return (
    <div>Onboarding</div>
  );
}

export default Onboarding