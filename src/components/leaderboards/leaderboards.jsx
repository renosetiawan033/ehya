import React from 'react'
import Shape from '../../assets/Shape.png';
import star from '../../assets/star.png';
import troli from '../../assets/troli.png'

const LeaderboardsData =[
{
    id: 1,
    title: "Asus Zenbook UX-430 US",
    rate: "4,8",
    body:"21K Total Reviews",
    img: Shape,
    delay: 0.2,
},
{
    id: 2,
    title: "Audio Technica ATH M20 BT",
    rate: "5,0",
    body:"300K Total Reviews",
    img: Shape,
    delay: 0.2,
},
{
    id: 3,
    title: "SK II - Anti Aging Cream",
    rate: "4,9",
    body:"89K Total Reviews",
    img: Shape,
    delay: 0.2,
},
{
    id: 4,
    title: "Modena Juice Blender",
    rate: "4,8",
    body:"871 Total Reviews",
    img: Shape,
    delay: 0.2,
},

]

const leaderboards = () => {
  return (
    <section>
          <div className="container pb-14 pt-16">
        <div className='flex flex-col items-center py-10'>
          <h1 className="text-4xl font-bold text-center mb-4">
          Most Sold in Ehya Store
          </h1>
          <p className="text-center max-w-2xl px-4">
          This is the seciton about the data which product with most sold in Ehya Store.
          </p>
        </div>
          
           {/* BennerData Items */}
           <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-6'>
            {LeaderboardsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#f4f4f4] rounded-2xl flex items-center gap-4 p-4 py-6 hover:bg-white hover:scale-105 duration-300 hover:shadow-lg"
              >
                <img src={item.img} alt="" className="max-w-[150px] object-cover nr-4 mb-4" />
                <div className='flex-1'>
                <h1 className="text-lg font-semibold mb-3 text-left">
                  {item.title}
                </h1>
                <div className="flex items-center mb-3 space-x-2">
                  <span className="text-lg font-semibold">{item.rate}</span>
                  <img src={star} alt="star" className="w-5 h-5" />
                  <img src={star} alt="star" className="w-5 h-5" />
                  <img src={star} alt="star" className="w-5 h-5" />
                  <img src={star} alt="star" className="w-5 h-5" />
                </div>
                <h1 className="text-sm text-left ">
                  {item.body}
                </h1>
                </div>
                <div className='flex items-center space-x-2 '>
                    <button className='secondary-btn'>Read Reviews</button>
                    <button className='primary-btn flex items-center'><img src={troli} alt="troli"  />Buy</button>
                </div>
                    </div>
            ))}
          </div>
          <div className='flex flex-col items-center py-10'>
      <ul className='list-none p-0'>
        <li className="mb-3 text-blue-500 font-semibold px-4">
          See full Leaderboards
        </li>
      </ul>
    </div>
        </div>
    </section>
  )
}

export default leaderboards
