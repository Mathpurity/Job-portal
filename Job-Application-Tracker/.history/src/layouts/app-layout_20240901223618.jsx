import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      div.grid-background
      <Outlet />
    </div>
  )
}

export default AppLayout