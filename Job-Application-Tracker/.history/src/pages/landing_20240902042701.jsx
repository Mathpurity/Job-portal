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
     <Button variant="blue" size="xl" relative z-10>Find Jobs</Button>
     </Link>
     <Link to={'/post-job'}>
     <Button  size="xl" variant="destructive" relative z-10>Post Jobs</Button>
     </Link>
</div>
<div>
     <Carousel
  
  className="w-full py-10 ">

     <CarouselContent className="">{companies.map(({ name,id,path }) => {
      return(
      <CarouselItem key={id} className="basis-1/3">
          <img 
          src={path}
           alt={name}
           className='h-9 sm:h-14 object-contain '
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