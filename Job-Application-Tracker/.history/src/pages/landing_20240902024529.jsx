import { Button } from '@/components/ui/button';
import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
    <section className='text-center'>
      <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold 
      sm:text-6xl lg:text-8xl tracking-tighter py-4'>
        Find Your Dream Job
        <span >and get HIRED</span>
        </h1> 
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>Explore thousands of job listings</p>
    </section>
    <div>
     <Link to={'/jobs'}>
     <Button>Find Jobs</Button>
     </Link>
     
        {/*carousel */}
    </div>
      {/*banner */}

      <section>
          {/*card */}
      </section>

        {/*Accordion */}
  </main>;
}

export default LandingPage