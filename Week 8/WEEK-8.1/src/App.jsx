import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-3'>
    <RevenueCard title={"Amount Pending"} amount={"92,300.30"} orderCount={13} />










      {/* <div style={{display: "flex" ,justifyContent: "space-around"}}>
        <div style={{backgroundColor: "red"}}>Hi</div>
        <div style={{backgroundColor: "yellow"}}>Hi</div>
        <div style={{backgroundColor: "green"}}>Hi</div>
      </div> */}


      {/* <div className='grid grid-cols-10 bg-red-500 md:bg-blue-500'>
        <div className='bg-red-500 col-span-4'>Hi</div>
        <div className='bg-green-500 col-span-4'>Hi</div>
        <div className='bg-yellow-500 col-span-2'>Hi</div>
        <div className='bg-orange-500 col-span-4'>Hi</div>
        <div className='bg-yellow-500 col-span-2'>Hi</div>
        <div className='bg-yellow-500 col-span-2'>Hi</div>
        <div className='bg-yellow-500 col-span-2'>Hi</div>
      </div>
      
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className=' grid grid-cols-1 md: grid grid-cols-3'>Hi There</div>
      <div className=' grid grid-cols-1 md: grid grid-cols-3'>Hi There</div>
      <div className=' grid grid-cols-1 md: grid grid-cols-3'>Hi There</div>
    </div>  */}
    </div>
  )
}

export default App
