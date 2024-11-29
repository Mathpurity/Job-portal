
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';


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
        path:'/',
        element:< />,
      },
      {
        path:'/',
        element:<LandingPage />,
      },
      {
        path:'/',
        element:<LandingPage />,
      },
      {
        path:'/',
        element:<LandingPage />,
      },
      {
        path:'/',
        element:<LandingPage />,
      },
    ],
  },
]);

function App() {

  return  <RouterProvider router={router} />;

}

export default App;
