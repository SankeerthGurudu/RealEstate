import React from 'react'
import video from '../img/Video.png'
import face from '../img/face.png'
import symbol from '../img/Symbol.png'
import left from '../img/button_left.png'
import right from '../img/button_right.png'
import down from '../img/down.svg'
import up from '../img/up.svg'

// background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9F9F9 100%);

const FAQ = () => {
    return (
        <div className='relative w-full h-[1719px] top-[7808px] flex flex-col gap-4 bg-custom-gradient'>

            <h3 className='font-montserrat font-bold text-[32px] text-center'>What Our Pharma Partners Say</h3>
            <p className='font-opensans text-[24px] text-center'>Driving Transformations, One Brand at a Time</p>

            <div className='flex absolute w-[1117px] h-[564px] top-[247px] left-[162px] rounded-[16px] py-[50px] px-[44px] gap-[10px] shadow-custom'>
                <img src={video} alt="" />
                <div className='w-[397px] h-[285px] absolute top-[143px] right-[52px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <img src={face} alt="" />
                            <span className='font-poppins font-bold text-[18px]'>Tabish khan</span>
                        </div>
                        <img className='w-[62px] h-[62px]' src={symbol} alt="" />
                    </div>
                    <p className='font-opensans text-[24px]'>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
                </div>
            </div>

            <div className="arrows absolute top-[850px] left-[644px] gap-[32px] flex">
                <img src={left} alt="" />
                <img src={right} alt="" />
            </div>


            <div className="faq absolute top-[1070px] left-[103px] w-[1280px] h-[576.75px]">
                <h3 className='font-montserrat font-bold text-[32px] text-center mb-3'>Frequently Asked Questions</h3>
                <p className='font-opensans w-[984px] h-[72px] text-[24px] text-center mx-auto'>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>

                <div className='w-[1280px] h-[376.75px] px-[240px]  mt-[54px]'>
                    <div className='border'>

                        <div className='w-[800px] h-[68px] py-[20px] px-[45px] flex gap-[10px] items-center justify-between shadow-faq bg-[#FFFFFF]'>
                            <p className='font-montserrat font-semibold text-[18px]'>3. How does Osumare measure campaign success?</p>
                            <img className='w-[13px] h-[20px]' src={down} alt="" />
                        </div>
                        <div className='w-[800px] h-[68px] py-[20px] px-[45px] flex gap-[10px] items-center justify-between shadow-faq bg-[#FFFFFF]'>
                            <p className='font-montserrat font-semibold text-[18px]'>3. How does Osumare measure campaign success?</p>
                            <img className='w-[13px] h-[20px]' src={down} alt="" />
                        </div>
                        <div className='w-[800px] h-[68px] py-[20px] px-[45px]  gap-[10px] items-center shadow-faq bg-[#0078FF] text-white '>
                            <div className='flex justify-between '>
                                <p className='font-montserrat font-semibold text-[18px]'>3. How does Osumare measure campaign success?</p>
                                <img className='w-[13px] h-[20px]' src={up} alt="" />
                            </div>
                            <div className='w-[800px] h-[172.75px] shadow-custom absolute left-[240px] bottom-[13px] pt-[28px] pr-[51px] pb-[27.75px] pl-[45px]'>
                                <p className='font-opensans text-[16px] text-[#706F7B] '>We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
