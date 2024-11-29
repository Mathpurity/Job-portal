import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
  return <>
  <nav className='py-4 flex justify-between items-center'>
    <Link>
        <img src="/logo.png" className='h-20' alt="" />
    </Link>

    <div className='flex gap-0'>
    <SignedOut>
        
      </SignedOut>
      <Button variant="outline">Login</Button>
      
      <SignedIn>
        <Link to={"/post-job"}>
        <Button variant='destructive' className='round-full'>
          Post a Job
          </Button>
          </Link>
        <UserButton />
      </SignedIn>
    </div>

  </nav>
</>
}

export default Header