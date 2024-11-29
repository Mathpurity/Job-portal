import { useUser } from '@clerk/clerk-react'
import React from 'react'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  
if(!isLoaded){
  retu
}

  return (
    <div>Onboarding</div>
  );
}

export default Onboarding