import React from 'react'
import card1 from '../img/cards/1.png'
import card2 from '../img/cards/2.png'
import card3 from '../img/cards/3.png'
import card4 from '../img/cards/4.png'
import card5 from '../img/cards/5.png'
import card6 from '../img/cards/6.png'
import card7 from '../img/cards/7.png'
import card8 from '../img/cards/8.png'

const Service = () => {
  return (
    <div className='absolute w-full h-[997px] bg-[#F9F9F9] top-[2147.5px] py-[91px] px-[81px] gap-[10px] '>  
      <div className="frame-866 ">
        <div className="frame-290">
            <h3 className='font-montserrat font-bold text-[32px] text-center'>Our Service Offerings</h3>
            <p className='font-opensans text-[24px] text-center mb-[68px]'> Strategies that Drive Property Market Excellence</p>
        </div>
        <div className="frame-291 grid grid-cols-4 gap-[30px] max-2xl:mycontainer">
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card1} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>Automotive SEO</h3>
                <p className='font-opensans text-[14px] text-center'>Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card2} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>PPC Precision</h3>
                <p className='font-opensans text-[14px] text-center'>Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card3} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>Social Acceleration</h3>
                <p className='font-opensans text-[14px] text-center'> Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card4} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>Content Excellence</h3>
                <p className='font-opensans text-[14px] text-center'>Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card5} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>Web Design</h3>
                <p className='font-opensans text-[14px] text-center'>Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card6} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>Data-Driven Insights</h3>
                <p className='font-opensans text-[14px] text-center'>Leverage data to refine your strategies, making informed decisions that drive revenue growth.</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card7} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>End-to-End Solutions</h3>
                <p className='font-opensans text-[14px] text-center'>From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.</p>
                </div>
            </div>
            <div className="card w-[297px] h-[239px] py-[32px] px-[16px] rounded-[8px] bg-white shadow-card">
                <div>
                <img className='mx-auto' src={card8} alt="" />
                <h3 className='font-montserrat font-bold text-[18px] text-center'>Video marketing</h3>
                <p className='font-opensans text-[14px] text-center'>Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center mt-[70px]'>
        <button className='bg-[#0078FF] w-[233px] h-[61px] rounded-[32px] py-[16.5px] px[64px] font-montserrat font-[600] text-[18px] text-center text-white'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Service
