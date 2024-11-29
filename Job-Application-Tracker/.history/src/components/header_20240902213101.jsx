import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { PenBox } from 'lucide-react'

const Header = () => {
  const [showSign, setShowSignin] = useState(fa)
  return <>
  <nav className='py-4 flex justify-between items-center'>
    <Link>
        <img src="/logo.png" className='h-20' alt="" />
    </Link>

    <div className='flex gap-0'>
    <SignedOut>
    <Button variant="outline">Login</Button>
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
</>
}

export default Header