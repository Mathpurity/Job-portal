import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

const Header = () => {
  const [showSign, setShowSignin] = useState(false);

  const handOverlayClick =(e) => {

  }


  return <>
  <nav className='py-4 flex justify-between items-center'>
    <Link>
        <img src="/logo.png" className='h-20' alt="" />
    </Link>

    <div className='flex gap-0'>
    <SignedOut>
    <Button variant="outline" onClick={() => setShowSignin(true)}>Login</Button>
      </SignedOut>
      <SignedIn>

        {/* add a condition here */}
      <Button variant='destructive' className='round-full'>
        <PenBox size={20} className='mr-2' />
          Post a Job
          </Button>
        <Link to={"/post-job"}>
        
          </Link>
        <UserButton />
      </SignedIn>
    </div>

  </nav>
  {showSign && (
    
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
    <SignIn 
    signUpForceRedirectUrl='/onboarding'
    fallbackRedirectUrlUrl='/onboarding'
    />
    </div>
  )
  }
</>
}

export default Header