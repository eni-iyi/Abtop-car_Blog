import React from 'react'
import './Home.css'

const Home = () => {
  
  return (
    <div className='home w-full'>
      <div className='h-[60px] flex justify-center items-center z-10'>
      <h2 className='animate-bounce'>Welcome to AbTop Automobile, the home of affordable luxury</h2>
      </div>
      <img className='w-full h-full' src='https://img.freepik.com/free-photo/black-sport-car-highway-drive-sunset_114579-5064.jpg?size=626&ext=jpg&ga=GA1.2.2003963581.1674947193&semt=ais' alt=''/>
      
    </div>
  )
}

export default Home;