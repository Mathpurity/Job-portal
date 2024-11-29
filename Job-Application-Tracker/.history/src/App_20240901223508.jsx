
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-job';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />,
      },
      {
        path:'/onboarding',
        element:<Onboarding />,
      },
      {
        path:'/jobs',
        element:<JobListing />,
      },
      {
        path:'/jobs/:id',
        element:<JobPage />,
      },
      {
        path:'/post-job',
        element:<PostJob />,
      },
      {
        path:'/save-job',
        element:<SavedJobs />,
      },
      {
        path:'/my-jobs',
        element:<My />,
      },
    ],
  },
]);

function App() {

  return  <RouterProvider router={router} />;

}

export default App;
