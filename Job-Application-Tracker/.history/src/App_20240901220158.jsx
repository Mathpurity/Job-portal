
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'


const router = createBrowserRouter([
  element: <AppLayout />,
  children:[
    {
      path:'/'
    }
  ]
])

function App() {

  return 
}

export default App
