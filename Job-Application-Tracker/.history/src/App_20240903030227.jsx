
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-job';
import MyJobs from './pages/my-jobs';
import './App.css'
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-route';


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
        element: ( 
        <ProtectedRoute>
          <Onboarding />,
          </ProtectedRoute>
      ),
        
        
      },
      {
        path:'/jobs',
        element: (
        <ProtectedRoute>
           <JobListing />,
        </ProtectedRoute>
        ),
       
      },
      {
        path:'/jobs/:id',
        element: (
        <ProtectedRoute>
          <JobPage />,
        </ProtectedRoute>
        ),
        
      },
      {
        path:'/post-job',
        element: ( 
        <ProtectedRoute>
          <PostJob />,
        </ProtectedRoute>
        )
        
      },
      {
        path:'/saved-jobs',
        element:<SavedJobs />,
      },
      {
        path:'/my-jobs',
        element:<MyJobs />,
      },
    ],
  },
]);

function App() {

  return( <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>)  

}

export default App;
