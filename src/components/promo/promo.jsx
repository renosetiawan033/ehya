import React from 'react';
import Delivery from '../../assets/Delivery.png';
import shope from '../../assets/shope.png';
import free from '../../assets/free.png';
import deal from '../../assets/deal.png';
import { motion } from 'framer-motion';

const promo = () => {
  return (
    <section className="container pb-14 pt-16 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-[#f4f4f4] rounded-lg pt-16 text-center hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
      >
        <p className="text-gray-500">Meekly Deals</p>
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          Free Delivery
        </h1>
        <a href="#" className="text-blue-500 font-bold hover:underline">
          Learn More --
        </a>
        <img src={Delivery} alt="Free Delivery" className="w-full h-auto mt-5" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.65 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-rows-2 gap-6"
      >
        <div className="bg-[#f4f4f4] rounded-lg pt-6 grid grid-cols-2 items-center hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl">
          <div className="m-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Disc Up to 25%
            </h3>
            <a href="#" className="text-blue-500 font-bold hover:underline">
              Learn More
            </a>
          </div>
          <div className="text-right -5">
            <img
              src={shope}
              alt="Discount Up to 25%"
              className="w-[150px] mb-4 inline-block"
            />
          </div>
        </div>

        <div className="bg-[#f4f4f4] rounded-lg pt-6 grid grid-cols-2 items-center hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl">
          <div className="text-right -5">
            <img
              src={free}
              alt="Free 5GB Data"
              className="w-[150px] mb-4 inline-block"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Free 5GB Data
            </h3>
            <a href="#" className="text-blue-500 font-bold hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#f4f4f4] rounded-lg pt-16 text-center hover:bg-white hover:scale-105 duration-300 hover:shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Anniversary Monthly Deals
        </h1>
        <a href="#" className="text-blue-500 font-bold hover:underline">
          Learn More
        </a>
        <img src={deal} alt="Monthly Deals" className="w-full h-auto mt-5" />
      </motion.div>
    </section>
  );
};

export default promo;
