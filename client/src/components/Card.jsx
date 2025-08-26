import React from 'react'

import { download } from '../assets';
import { downloadImage } from '../utils' 

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover dark:shadow-card-dark dark:hover:shadow-glow-dark card transition-all duration-500 transform hover:scale-[1.02] overflow-hidden bg-white dark:bg-dark-800 border border-gray-100 dark:border-gray-700'>
      <div className='relative overflow-hidden rounded-t-xl'>
        <img 
          src={photo} 
          className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110' 
          alt={prompt} 
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
      
      <div className='opacity-0 group-hover:opacity-100 flex flex-col absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
        <p className='text-white text-sm mb-3 line-clamp-3 leading-relaxed'>{prompt}</p>

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex justify-center items-center text-white text-sm font-bold shadow-md'>
              {name[0]?.toUpperCase()}
            </div>
            <p className='text-white text-sm font-medium truncate'>{name}</p>
          </div>
          
          <button 
            type='button' 
            onClick={() => downloadImage(_id, photo)} 
            className='p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50'
            title='Download image'
          >
            <img 
              src={download} 
              alt="Download" 
              className='w-5 h-5 object-contain invert opacity-90'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card