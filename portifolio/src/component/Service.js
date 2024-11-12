import React from 'react'

function Service() {
  return (
    <div>
      <div>
        <h1 className='underline mx-auto mt-20 text-center text-teal-400 text-2xl font-bold'>Service</h1>
     </div>
     <div className='flex justify-around mt-3 text-center items-center '>
        <div>
        <img className='text-teal-400 w-16' src='image/coding.png'></img>
           <p className='text-gray-400 text-sm'>Web Development</p> 
        </div>
        <div>
        <img className='text-teal-400 w-16' src='image/illustration.png'></img>
           <p className='text-gray-400 text-sm'>UI/UX Design</p> 
        </div>
        <div>
        <img className='text-teal-400 w-16' src='image/image.png'></img>
           <p className='text-gray-400 text-sm'>Graphic Design</p> 
        </div>
     </div>
    </div>
  )
}

export default Service
