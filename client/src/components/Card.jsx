import React from 'react'

import { download } from '../assets';
import { downloadImage } from '../utils' 

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card transition-all duration-700'>
      <img src={photo} className='w-full h-auto object-cover rounded-xl' alt={prompt} />
      <div className='opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible flex flex-col max-w-[95%] max-h-[94.5%] absolute bottom-0 left-0 ring-0 bg-[#10131f] p-4 m-2 bg-opacity-75 rounded-lg transition-all duration-700'>
        <p className='text-white text-md overflow-y-auto prompt'>{prompt}</p>

        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold'>
              {name[0]}
            </div>
            <p className='text-white text-sm'>{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card