import React from 'react'
import img1 from '../img/cards2/1_1.png'
import img2 from '../img/cards2/1.2.png'
import img3 from '../img/cards2/1.3.png'
import img4 from '../img/cards2/1.4.png'
import teacher from '../img/teacher.png'

const Navigation = () => {
    return (
        <div className='absolute w-[1378px] h-[108px] top-[3302px] left-[81px] '>
            <h3 className='font-montserrat font-bold text-[32px] text-center'>Navigating Real Estate's Digital Landscape</h3>
            <p className='font-opensans text-center text-[24px] '>Insights for Real Estate Marketing Advantage</p>

            <div className="frame-893 absolute w-[1280px] h-[736px] top-[174px] left-[10px] flex">
                <div className='w-[586px] h-[660px] z-10'>
                    <div className='flex w-[586px] h-[153px] rounded-[16px] p-[32px] bg-white border border-[#EFEFEF] shadow-nav mb-4'>
                        <img src={img1} alt="" />
                        <div className='flex flex-col gap-1 justify-center ml-3'>
                            <h3 className='font-poppins font-semibold text-[24px]'>Market Trends Analysis</h3>
                            <p className='font-inter text-[16px]'>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                    <div className='flex w-[586px] h-[153px] rounded-[16px] p-[32px] bg-white border border-[#EFEFEF] shadow-nav mb-4'>
                        <img src={img2} alt="" />
                        <div className='flex flex-col gap-1 justify-center ml-3'>
                            <h3 className='font-poppins font-semibold text-[24px]'>Market Trends Analysis</h3>
                            <p className='font-inter text-[16px]'>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                    <div className='flex w-[586px] h-[153px] rounded-[16px] p-[32px] bg-white border border-[#EFEFEF] shadow-nav mb-4'>
                        <img src={img3} alt="" />
                        <div className='flex flex-col gap-1 justify-center ml-3'>
                            <h3 className='font-poppins font-semibold text-[24px]'>Market Trends Analysis</h3>
                            <p className='font-inter text-[16px]'>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                    <div className='flex w-[586px] h-[153px] rounded-[16px] p-[32px] bg-white border border-[#EFEFEF] shadow-nav mb-4'>
                        <img src={img4} alt="" />
                        <div className='flex flex-col gap-1 justify-center ml-3'>
                            <h3 className='font-poppins font-semibold text-[24px]'>Market Trends Analysis</h3>
                            <p className='font-inter text-[16px]'>Predictive insights to guide real estate strategies.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute frame-892 w-[793px] h-[736px] right-[0px] top-[-40px] rounded-[32px] ">
                    <img src={teacher} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navigation
