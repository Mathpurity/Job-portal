import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react'
import { Link } from 'react-router-dom';
import companies from '../data/companies.json'
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';


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
     
     
     <Carousel plugins={[
      Autoplay({ delay: 2000,  })
     ]} className="w-full py-10 ">

     <CarouselContent className="flex gap-5 sm:gap-20 items-center">
      {companies.map(({ name,id,path }) => {
      return(
      <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
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
    </div>
      {/*banner */}
      <div className="flex justify-center pl-9">
      <img src="banner.jpg" className='w-full h-403' />
      </div>
      

      <section className='grid grid-cols-1 md:grid-cols-2'>
  <Card>
    <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
<Card>
    <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

          {/*card */}
      </section>

        {/*Accordion */}
  </main>;
}

export default LandingPage