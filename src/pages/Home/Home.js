import React from 'react'
import MainPage from '~/components/Home/MainPage/MainPage'
import SideBar from '~/components/Home/SideBar/SideBar'

function Home() {
  return (
    <div className='main'>
        <SideBar />
        <MainPage />
        
    </div>
  )
}

export default Home