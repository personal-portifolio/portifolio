import React from 'react'

function Service() {
  return (
    <div>
      <div>
        <h1 className=' mx-auto mt-24 text-center  text-teal-400 text-xl font-semibold'>Service Provided By Me.</h1>
     </div>
     <div className='flex justify-around mt-7 text-center  items-center '>
     <div className='flex flex-col items-center'>
        <img className='text-teal-400 w-12' src='image/coding.png'></img>
           <p className='text-gray-400 text-sm '>Web Development</p> 
        </div>
        <div className='flex flex-col items-center'>
        <img className='text-teal-400 w-12' src='image/illustration.png'></img>
           <p className='text-gray-400 text-sm'>UI/UX Design</p> 
        </div>
        <div className='flex flex-col items-center'>
        <img className='text-teal-400 w-12' src='image/image.png'></img>
           <p className='text-gray-400 text-sm'>Graphic Design</p> 
        </div>
     </div>
    </div>
  )
}

export default Service
