import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

const Header = () => {
  return <>
  <nav className='py-4 flex justify-between items-center'>
    <Link>
        <img src="/logo.png" className='h-20' alt="" />
    </Link>

    <div className='flex gap-0'>
    <SignedOut>
    <Button variant="outline">Login</Button>
      </SignedOut>
      <Button variant='destructive' className='round-full'>
        <PenBox
          Post a Job
          </Button>
      <SignedIn>
        <Link to={"/post-job"}>
        
          </Link>
        <UserButton />
      </SignedIn>
    </div>

  </nav>
</>
}

export default Header