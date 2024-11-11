import React from 'react'
import Header from './Header'

function Hero() {
  return (
    <div className='flex flex-wrap gap-10 justify-around mt-20 '>
   <div>
    <h3 className='text-3xl text-left'>I'm Maraki Astatke
      <br/> <span className='text-teal-700'> Front-end</span> Developer
    </h3>
    <p className='mt-12 text-left text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
      Est nostrum tenetur fuga, quas quod corrupti assumenda!</p>
   
  
     
<div className='flex gap-10 mt-8 mb-5'>
  <button className='border border-teal-700 px-6 py-1'>DOWNLOAD CV</button>
  <button className='text-white bg-teal-700 px-5 rounded-md'>HIRE ME</button>
</div>
   </div>

   <img className='w-80  ' src='image/photo.jpg'></img>  
    </div>
  )
}


export default Hero
