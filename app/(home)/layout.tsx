import TopBar from '@/components/TopBar'
import React from 'react'

const HomeLayout = ({children}:{children:React.ReactNode}) => {
  return (
  <div className="">
    <TopBar />
    {children}
  </div>
  )
}

export default HomeLayout