import React from 'react'
import { IoMdMenu } from "react-icons/io";
import logo from '../../assets/logo.png';
import {motion} from "framer-motion";
import {Link} from "react-router-dom"


const navbarMenu = [
 {
    id: 1,
    title: 'Home',
    peth: '/',
 },

 {
    id: 2,
    title: 'Landings',
    peth: '#',
 },

 {
    id: 3,
    title: 'Pages',
    peth: '#',
 },

 {
    id: 4,
    title: 'Docs',
    peth: '#',
 },
 {
    id: 5,
    title: 'Help',
    peth: '#',
 },
]


const navbar = () => {
  return (
   <nav className="relative z-20">
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    className="container flex justify-between items-center"> 
        {/*logo section*/}
        <div>
            <img src={logo} alt="" className='py-10' />
        </div>
        {/*menu section*/}
        <div className='hidden lg:block'>
            <ul className='flex items-center gap-3'>
                {
                navbarMenu.map((menu) => (
                    <li key={menu.id}> 
                    <a href="menu.path" className='inline-block py-2 px-3 hover:text-secondary relative group'>
                        <div className='w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                        
                        {menu.title}</a></li>
                ))
                }
                <Link to='/login' className='inline-block hover:text-secondary relative group mr-2 cursor-pointer '> Login </Link>
                <button className='primary-btn'>Get It NOW</button>
            </ul>
        </div>
        <div className='lg:hidden'>
            <IoMdMenu className="text-3xl"/>


        </div>
    </motion.div>
   </nav>
  )
}

export default navbar
