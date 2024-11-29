import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners'


const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate()

  const handleRoleSelection = async (role) => {
    await user.update({
      unsafeMetadata: {role},
    }).then(() =>{
      navigate(role === 'recruiter' ? "/post-job" : "/jobs");
    })
    .catch((err) => {
      console.error("Error updating role:")
    })
  }
  
  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <PacmanLoader className='mb-4' width={'100%'} color='#36d7b7' />
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center justify-center mt-40'>
      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>
    I am a...
  </h2>
  <div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40'>
    <Button variant="blue" 
    className="h-36 text-2x1" 
    onClick={()=> handleRoleSelection("candidate")}>
      Candidate
    </Button>
    <Button variant="destructive" 
    className="h-36 text-2x1"
    onClick={()=> handleRoleSelection("recruiter")}>
      Recruiter
    </Button>
  </div>
    </div>
  );
}

export default Onboarding;