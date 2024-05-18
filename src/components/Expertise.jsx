import React from 'react'
import icon1 from '../img/expertise/icon1_1.png'
import icon2 from '../img/expertise/icon1_2.png'
import icon3 from '../img/expertise/icon1_3.png'
import icon4 from '../img/expertise/icon1_4.png'

const Expertise = () => {
    return (
        <div className='absolute top-[6116px] left-[120px] flex flex-col gap-[64px]'>
            <h3 className='font-montserrat font-extrabold text-[32px] w-[1280px] h-[48px] text-center text-[#000C1A]'>Our Expertise in Action</h3>

            <div className="frame-871">
                
                <div className='flex gap-[35px]'>
                    <div className='w-[621px] h-[463px] flex flex-col gap-[16px]'>
                        <img className='mx-auto' src={icon1} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Effective CTAs</h3>
                        <p className='font-opensans text-[24px] text-center'> See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency.</p>
                    </div>
                    <div className='w-[621px] h-[463px] flex flex-col gap-[16px]'>
                        <img className='mx-auto' src={icon2} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Conversion-Optimized Landing Pages</h3>
                        <p className='font-opensans text-[24px] text-center'> Explore a case study where our landing page optimization increased property lead conversion rates by 30%</p>
                    </div>
                </div>

                <div className='flex gap-[35px]'>
                    <div className='w-[621px] h-[463px] flex flex-col gap-[16px]'>
                        <img className='mx-auto' src={icon3} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Trust Building with Social Proof</h3>
                        <p className='font-opensans text-[24px] text-center'>Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project</p>
                    </div>
                    <div className='w-[621px] h-[463px] flex flex-col gap-[16px]'>
                        <img className='mx-auto' src={icon4} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Mobile-First Success:</h3>
                        <p className='font-opensans text-[24px] text-center'> Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Expertise
