import { useUser } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom';
import React from 'react'

const ProtectedRouter = () => {
    const {isSignedIn, user, isLoaded } = useUser


  return (
    <div>
        
    </div>
  )
}

export default ProtectedRouter