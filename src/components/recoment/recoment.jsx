import React from 'react'
import Shape from '../../assets/Shape.png';
import {motion} from 'framer-motion'

const RecomentData =[
    {
        id: 1,
        title: "The best Anti Aging Cream with cheap price",
        img: Shape,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Best budget Headphone for RPG Gamers ",
        img: Shape,
        delay: 0.2,
    },
    {
        id: 3,
        title: "Have a much project? You must have a this Savage Laptop",
        img: Shape,
        delay: 0.2,
    },
    {
        id: 4,
        title: "Bored work from home? You can make a juice for your health",
        img: Shape,
        delay: 0.2,
    },

]

const SlideLeft = (delay) => {
    return {
      initial:{
        opacity: 0,
        x: 50
      },
      animate:{
        opacity: 1,
        x: 0,
        transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut"
        }
      }
    }
  }

const recoment = () => {
  return (
    <section className="bg-white">
    <div className="container pb-14 pt-16"> 
      <div className='w-full py-10 flex justify-between items-center'>
      <h1 className="text-4xl font-bold">
       Recommended for you
      </h1>
      <button className='primary-btn'>Show All</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
       {RecomentData.map((recoment) =>  (
       <motion.div
       variants={SlideLeft(recoment.delay)}
       initial="initial"
       whileInView={"animate"}
       viewport={{ once: true }}
       className="bg-[#f4f4f4] rounded-2xl fle
        flex-col gap-4 items-center justify-center p-4
        py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
     <img src={recoment.img} alt="" />

       
       <h1 className="text-lg font-semibold text-center px-3">
           {recoment.title}
       </h1>
       <h3 className="text-lg text-center px-3">
           {recoment.body}
       </h3>
       </motion.div>
       ))}
      </div>
   </div>  
   </section>
  )
}

export default recoment
