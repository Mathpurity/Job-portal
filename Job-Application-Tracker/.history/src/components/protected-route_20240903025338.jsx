import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react'

const ProtectedRouter = () => {
    const {isSignedIn, user, isLoaded } = useUser();
    const { pathname } = useLocation();

    if(isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate 
    }


  return (
    <div>
        
    </div>
  )
}

export default ProtectedRouter