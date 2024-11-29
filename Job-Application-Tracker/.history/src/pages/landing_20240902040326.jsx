import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react'
import { Link } from 'react-router-dom';
import companies from '../data/companies.json'

const LandingPage = () => {
  return <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
    <section className='text-center'>
      <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold 
      sm:text-6xl lg:text-8xl tracking-tighter py-4'>
        Find Your Dream Job
        <span >and get HIRED</span>
        </h1> 
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl 
        font-medium leading-relaxed text-center shadow-md p-2 rounded-md'>Explore thousands of job listings</p>
    </section>
    <div className='flex gap-6 justify-center'>
     <Link to={'/jobs'}>
     <Button variant="blue" size="xl">Find Jobs</Button>
     </Link>
     <Link to={'/post-job'}>
     <Button  size="xl" variant="destructive">Post Jobs</Button>
     </Link>

     <Carousel
  
  className="w-full py-10">

     <CarouselContent>{companies.map(({ name,id,path }) => {
      return(
      <CarouselItem key={id}>
          <img 
          src={path}
           alt={name}
           className='h-14 sm:h-20 lg-24 object-contflex flex-col gap-10 sm:gap-20 py-8 sm:py-16'
           />
      </CarouselItem>
      );

     })}
     
     
     </CarouselContent>
    </Carousel>

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