import React from 'react';
import logo3 from "../../assets/logo3.png";
import kendi from '../../assets/kendi.png';
import tameng from '../../assets/tameng.png';
import call from '../../assets/call.png';
import mobil from '../../assets/mobil.png';


const BennerData = [
  {
    id: 1,
    title: "Have Most Stock",
    body: "We have many stock until next year to supply your needs.",
    img: kendi,
    delay: 0.2,
},
{
  id: 2,
  title: "100% Secure",
  body: "You don’t need to worry when transaction on our plattform now.",
  img: tameng,
  delay: 0.2,
},
{
  id: 3,
  title: "24/7 Support",
  body: "If any problem use our plattform you can contact us free.",
  img: call,
  delay: 0.2, 
},
{
  id: 4,
  title: "Free Delivery",
  body: "Wherever you are, we make sure you get free delivery service.",
  img: mobil,
  delay: 0.2,
},

]


const benner = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <div className='flex flex-col items-center py-10'>
          <h1 className="text-4xl font-bold text-center mb-4">
            Why Choose Us Over Others?
          </h1>
          <p className="text-center max-w-2xl px-4">
            Many reasons why customers choose us over other e-commerce sites. We have some advantages that others might not have.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Logo */}
          <div className='flex-1 flex items-center justify-center'>
            <img src={logo3} alt="Logo" className="w-[450px] md:max-w-[550px] object-cover drop-shadow" />
          </div>
          {/* BennerData Items */}
          <div className='flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-8'>
            {BennerData.map((item) => (
              <div
                key={item.id}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
              >
                <img src={item.img} alt="" className="w-16 border h-16 object-cover" />
                <h1 className="text-lg font-semibold text-center px-3">
                  {item.title}
                </h1>
                <h1 className="text-sm text-center px-3">
                  {item.body}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default benner;
