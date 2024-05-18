import React from 'react'
import icon from '../img/inquiries/icon.png'
import icon1 from '../img/inquiries/icon1.png'
import icon2 from '../img/inquiries/icon2.png'
import icon3 from '../img/inquiries/icon3.png'

const Inquiries2 = () => {
    return (
        <div className='absolute top-[4950px] left-[120px] flex flex-col gap-[64px]'>
            <h3 className='font-montserrat font-bold text-[32px] w-[1280px] h-[48px] text-center'>Driving Property Inquiries to Conversions</h3>

            <div className='frame-871'>

                <div className='flex gap-[35px]' >
                    <div className='w-[621px] h-[463px] flex flex-col gap-4'>
                        <img className='mx-auto' src={icon} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Call-to-Action Optimization</h3>
                        <p className='font-opensans text-[24px] text-center'>Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.</p>
                    </div>
                    <div className='w-[621px] h-[463px] flex flex-col gap-4'>
                        <img className='mx-auto' src={icon1} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Landing Page Efficiency</h3>
                        <p className='font-opensans text-[24px] text-center'>Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.</p>
                    </div>
                </div>

                <div className='flex gap-[35px]' >
                    <div className='w-[621px] h-[463px] flex flex-col gap-4'>
                        <img className='mx-auto' src={icon2} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Social Proof Utilization</h3>
                        <p className='font-opensans text-[24px] text-center'>Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action</p>
                    </div>
                    <div className='w-[621px] h-[463px] flex flex-col gap-4'>
                        <img className='mx-auto ' src={icon3} alt="" />
                        <h3 className='font-montserrat font-bold text-[24px] text-center'>Mobile-Friendly Experience</h3>
                        <p className='font-opensans text-[24px] text-center'>With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.</p>
                    </div>
                </div>

            </div>

            <div>

            </div>
        </div>
    )
}

export default Inquiries2
