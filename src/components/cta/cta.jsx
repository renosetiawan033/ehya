import React from 'react';
import Market from '../../assets/Market.png';
import { FiSearch } from 'react-icons/fi';

const cta = () => {
  return (
    <div className='bg-blue-400 container grid grid-cols-1 md:grid-cols-2 min-h-[450px] max-h-[350px]  rounded-2xl gap-4 '>
        <img src={Market} alt='' className='object-cover rounded-2xl mt-auto' />
        <div className=' items-center  border-gray-300 grid grid-rows-2 rounded-lg overflow-hidden mb-4'>

      <div className='grid grid-rows-2 mt-auto'>
      <h1 className=' text-white text-2xl lg:text-4xl  font-bold !leading-snug mb-4'>
                      Never Miss a promo
                    </h1>
                    <p className='primari-btn text-white '>
                        We always give our customer a promo to gave the appreciate for loyalty to us.just subscribe to us : </p>
      </div>
                       <div className='flex justify-center '> 
                        <input 
                            type="text" 
                            placeholder="yourname@gmail.com" 
                            className='flex-grow px-4 py-1 outline-none '
                        />
                        <button className='p-2 bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center rounded-r-lg'>
                           subscribe
                        </button></div>
                    </div>

 
    </div>
  )
}

export default cta