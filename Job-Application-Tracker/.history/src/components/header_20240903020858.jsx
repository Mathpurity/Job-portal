import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';
import { PenBox } from 'lucide-react';

const Header = () => {
  const [showSign, setShowSignin] = useState(false);

  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get('sign-in')) {
      setShowSignin(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignin(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link to={'/'}>
          <img src="/logo.png" className='h-20' alt="Logo" />
        </Link>
        <div className='flex gap-4'>
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignin(true)}>Login</Button>
          </SignedOut>
          <SignedIn>
            {/* Add a condition here if needed */}
            <Link to={"/post-job"}>
              <Button variant='destructive' className='round-full flex items-center'>
                <PenBox size={20} className='mr-2' />
                Post a Job
              </Button>
            </Link>
            <UserButton><
          </SignedIn>
        </div>
      </nav>

      {showSign && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50' 
        onClick={handleOverlayClick}
        
        >
          <SignIn 
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
          />
        </div>
      )}
    </>
  );
}

export default Header;