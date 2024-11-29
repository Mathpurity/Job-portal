import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      div.grid
      <Outlet />
    </div>
  )
}

export default AppLayout