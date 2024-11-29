import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react'

const ProtectedRouter = ({children}) => {
    const {isSignedIn, user, isLoaded } = useUser();
    const { pathname } = useLocation();

    if(isLoaded && !isSignedIn && isSignedIn !== undefined) {
        return <Navigate to={'/?sign-in=true'} />;
    }


  return ch
}

export default ProtectedRouter