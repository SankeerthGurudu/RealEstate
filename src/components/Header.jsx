import React from 'react'
import HeaderImg from '../img/house.png'
import Cuate from '../img/cuate.png'

const Header = () => {
    return (
        <div>
            <div className="frame-3 absolute w-[979px] h-[284px] top-[350.5px] left-[271px] gap-[32px] z-10 mx-auto ">
                <div className="frame-2 w-[979px] h-[196px] gap-[16px]">
                    <div className='w-[979px] h-[144px] font-montserrat text-[48px] leading-[72px] text-center' >
                        Elevate <span className='text-[#0078FF] font-bold text-center'> Real Estate Success</span> with Osumare's Digital Expertise
                    </div>
                    <div className='font-opensans font-normal text-[24px] leading-[36px] text-center '>Tailored Solutions for Thriving in the Digital Real Estate Landscape</div>
                </div>
                <div className='flex justify-center'>
                <button className='absolute w-[408px] h-[56px] px-[135px] py-[13px] bg-[#0078FF] gap-1 text-white font-montserrat text-[24px] font-bold leading-[30px] rounded-[32px] text-center'>Get started</button>
                </div>
            </div>
            <div className="Header_IMG absolute w-[876px] h-[538px] top-[720px] left-[372px] z-10">
                <img src={HeaderImg} alt="" />
            </div>

            <h2 className='absolute w-[839px] h-[48px] top-[1468px] left-[331px] font-montserrat font-bold text-[32px] leading-[48px] text-center'>Real Estate-Focused Digital Mastery</h2>
            <div>
                <img className='absolute w-[507.12px] h-[342px] top-[1599px] left-[120px]' src={Cuate} alt="" />
                <div className='frame-337 absolute w-[733px] h-[385px] top-[1580px] left-[667px] gap-[32px]'>
                    <div className='frame-296 w-[679px] h-[292px] gap-[16px]'>
                        <h2 className='font-montserrat font-bold text-[32px] leading-[48px]'>Unlock the Potential of Digital Real Estate Excellence</h2>
                        <p className='font-opensans font-normal text-[24px] landing-[36px]'>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
                    </div>
                    <button className='rounded-[32px] py-[16.5px] px-[64px] bg-[#0078FF] text-white gap-1 font-montserrat font-[600] text-[18px]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header

