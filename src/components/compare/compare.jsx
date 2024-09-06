import React from 'react'
import Shape from '../../assets/Shape.png';
import Processor from '../../assets/Processor.png';
import kaset from '../../assets/kaset.png'

const CompareData=[
    {
        id: 1,
        title: "Asus Zenbook Pro UX-430 US",
        img: Shape,
        img2: Processor,
        title2:"Processor",
        body: "Intel® Core™ i3 7100U Processor",
        img3 : kaset,
        title3: "Operating System" ,
        body2:"Windows 10 Pro for business",
        delay: 0.2,
    },
    {
        id: 2,
        title: "Lenovo Legion Y545 2018",
        img: Shape,
        img2: Processor,
        title2:"Processor",
        body: "Intel® Core™ i7 9100P Processor",
        img3 : kaset,
        title3: "Operating System" ,
        body2:"Windows 10 Pro Enterprise",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Acer Swift Air SF1-313 5",
        img: Shape,
        img2: Processor,
        title2:"Processor",
        body: "Intel® Core™ i3 7100X Processor",
        img3 : kaset,
        title3: "Operating System" ,
        body2:"Windows 10 Pro for business",
        delay: 0.2,
    },
    {
        id: 4,
        title: "Lenovo Thinkpad Y51 X1 2019",
        img: Shape,
        img2: Processor,
        title2:"Processor",
        body: "Intel® Core™ i5 8000C Processor",
        img3 : kaset,
        title3: "Operating System" ,
        body2:"Windows 10 Pro for business",
        delay: 0.2,
    },
]

const compare = () => {
  return (
    <section className="bg-white">
    <div className="container pb-14 pt-16 "> 
      <div className='w-full py-10 flex justify-between items-center'>
      <h1 className="text-4xl font-bold">
      Compare the Product
      </h1>
      <button className='primary-btn'>+ New Comparison</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
       {CompareData.map((compare) =>  (
       <div className="bg-[#f4f4f4] rounded-2xl flex
        flex-col gap-4 items-center justify-center p-4
        py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
     <img src={compare.img} alt="" />
       
       <h1 className="text-lg font-semibold text-center px-3">
           {compare.title}
       </h1> 
       <img src={compare.img2} alt="" className=""/>
       <h1 className="text-lg font-semibold text-center px-3">
           {compare.title2}
       </h1>
       <h3 className="text-lg text-center px-3">
           {compare.body}
       </h3>
       <img src={compare.img3} alt="" className=""/>

       <h1 className="text-lg font-semibold text-center px-3">
           {compare.title3}
       </h1>

       <h3 className="text-lg text-center px-3">
           {compare.body2}
       </h3>
       </div>
       ))}
      </div>
   </div> 
   </section>
  )
}

export default compare
