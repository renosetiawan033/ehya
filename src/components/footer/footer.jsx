import React from 'react'
import logo from '../../assets/logo.png'
import Heart from '../../assets/Heart.png'


const footer = () => {
  return (
    <footer id='Footers' className='py-28'>
        <div className='container'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-14 md:gap-14 pb-10 space-y-4'>
                <div className='space-y-2 pt-6 max-w[300px]'>
                    <img src={logo} alt='' />
                    <h1 className='text-xl text-dark2 !leading-snug'>Build a modern and creative website with crealand</h1>

                </div>

                <div className='grid grid-cols-4 m-10 gap-5'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Product</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-3 text-1'>
                                <li className='cursor-pointer hover:text-chero duration-200'>Landingpage</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Featurs</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Documentation</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>ReferralProgram</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 m-10 gap-5'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Services</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-3 text-1'>
                                <li className='cursor-pointer hover:text-chero duration-200'>Documentation</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Design</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Themes</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Illustrations</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>UIKit</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 m-10 gap-5'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Company</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-3 text-1'>
                                <li className='cursor-pointer hover:text-chero duration-200'>About</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Terms</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>PrivacyPolicy</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 m-10 gap-5'>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Product</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-3 text-1'>
                                <li className='cursor-pointer hover:text-chero duration-200'>Document</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>License</li>
                                <li className='cursor-pointer hover:text-chero duration-200'>Changelog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col justify-center text-center align-center'>
            <div className='bg-gray-200 mx-auto mb-2 mt-2 rounded-full'>
                <img src={Heart} alt="" className='mx-auto mb-2 mt-2 ml-2 mr-2 hover:shadow-chero duration-300 hover:shadow-2xl' />
            </div>

            <h3 className='text-l !leading-snug'>
                Copyright © 2024. Crafted with love.<br/>
                @rnnstwn
            </h3>

        </div>
    </footer>
  )
}

export default footer
