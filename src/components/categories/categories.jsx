import React from 'react'
import Baju from '../../assets/Baju.png';
import Phone from '../../assets/Phone.png';
import Notebook from '../../assets/Notebook.png';
import Lagu from '../../assets/Lagu.png';
import Camera from '../../assets/Camera.png';
import Kursi from '../../assets/Kursi.png';
import B from '../../assets/B.png';
import Ball from '../../assets/Ball.png';
import {motion} from "framer-motion";


const CategoriesData =[
    {
        id: 1,
        title: "Fashion",
        body: "290k items",
        img: Baju,
        path: "/",
        delay: 0.2,
    },
    {
      id: 2,
      title: "Handphone",
      body: "3M items",
      img: Phone,
      path: "#",
      delay: 0.3,
  },  
   {
        id: 3,
        title: "Laptop",
        body: "1,2 M items",
        img: Notebook,
        path: "#",
        delay: 0.4,
    },
    {
      id: 4,
      title: "Music",
      body: "751 items",
      img: Lagu,
      path: "#",
      delay: 0.5,
  },
  {
    id: 5,
    title:"Photography",
    body: "1,0M items",
    img: Camera,
    path:"#",
    delay: 0.6,
},
{
  id: 6,
  title: "Furniture",
  body: "88k items",
  img: Kursi,
  path: "#",
  delay: 0.7, 
},
{
  id: 7,
  title: "Health",
  body: "761k items",
  img: B,
  path: "#",
  delay: 0.8,
},
{
  id: 8,
  title: "Sports",
  body:"2,9k items",
  img: Ball,
  path: "#",
  delay: 0.9,
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


const categories = () => {
  return (
   <section className="bg-white">
     <div className="container pb-14 pt-16"> 
       <div className='w-full py-10 flex justify-between items-center'>
       <h1 className="text-4xl font-bold ">
        Categories
       </h1>
       <button className='primary-btn'>Show All</button>
       </div>
       <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-1">
        {CategoriesData.map((categories) =>  (
        <motion.div
        variants={SlideLeft(categories.delay)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="bg-[#f4f4f4] rounded-2xl flex
         flex-col gap-4 items-center justify-center p-4
         py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
      <img src={categories.img} alt=""  className="border w-20 h-auto mx-auto"/>

        
        <h1 className="text-lg font-semibold text-center pb-4 pt-6">                           
            {categories.title}
        </h1>
        <h3 className="text-lg text-center ">
            {categories.body}
        </h3>
        </motion.div>
        ))}
       </div>
    </div>  
    </section>
        
  );
};


export default categories
