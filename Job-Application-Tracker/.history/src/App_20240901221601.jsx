
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPag />
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
