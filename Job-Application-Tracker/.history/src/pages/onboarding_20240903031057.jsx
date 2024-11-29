import { useUser } from '@clerk/clerk-react'
import React from 'react'


const Onboarding = () => {
  const { user } = useUser();
  console.lo
  return (
    <div>Onboarding</div>
  )
}

export default Onboarding