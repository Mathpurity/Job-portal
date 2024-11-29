import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedOut, SignInButton } from '@clerk/clerk-react'

const Header = () => {
  return <>
  <nav className='py-4 flex justify-between items-center'>
    <Link>
        <img src="/logo.png" className='h-20' alt="" />
    </Link>
    {/*<Button variant="outline">Login</Button>*/}

    <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIi>
        <UserButton />
      </SignedIn>

  </nav>
</>
}

export default Header