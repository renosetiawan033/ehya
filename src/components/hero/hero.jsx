import React from 'react';
import Navbar from '../navbar/navbar';
import { FiSearch } from "react-icons/fi";
import blob from '../../assets/blob.svg';
import logo2 from '../../assets/logo2.png';
import {animate, motion} from "framer-motion";

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        }
        ,
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type:"spring",
                stiffness:100,
                duration: 0.5,
                delay:delay,
                ease:"easeInOut",
           
           } 
        }
    }
}
        


const hero = () => {
  return (
    <section className='bg-white overflow-hidden relative'>
        <Navbar /> 
        <div className="bg-chero container grid grid-cols-1 md:grid-cols-2 min-h-[650px] rounded-2xl">
            <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
                <motion.h1 
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                className='text-3xl lg:text-5xl font-bold !leading-snug mb-4'>
                    Browse Million Products for Your Needs
                </motion.h1>
                <br/>
                <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                className='flex items-center border-gray-300 rounded-lg overflow-hidden'>
                    <input 
                        type="text" 
                        placeholder="I want to buy.." 
                        className='flex-grow px-4 py-1 outline-none'
                    />
                    <button className='p-2 bg-blue-500 hover:bg-blue-600 flex items-center justify-center rounded-r-lg'>
                        <FiSearch className='text-white' />
                    </button>
                </motion.div>
            </div>
            {/* hero image */}
            <div className="flex justify-center items-center">
            <motion.img 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease:"easeInOut"}}
            src={logo2} alt="" className="w-[400px] xl:w-[600px] relative z-10 drop-shadow" />
            <motion.img 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease:"easeInOut"}}
            src={blob} alt="" 
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
            />
            </div>
        </div>
        
    </section>
  );
};

export default hero;
