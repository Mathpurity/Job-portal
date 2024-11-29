import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <>
  <nav>
    <Link>
        <img src="/logo.png" className='h-20' alt="" />
    </Link>
  </nav>
</>
}

export default Header