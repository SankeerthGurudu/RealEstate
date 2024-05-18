import React from 'react'
import LogoImg from '../img/logo.png'

const Navbar = () => {
    return (
        <div className='nav fixed w-full flex justify-between items-center h-[108px] pt-[8px] pr-[80px] pb-[0px] pl-[80px] bg-[#FFFFFFA3] z-20 backdrop-blur'>
            <div className='logo w-[172px]'>
                <img className='' src={LogoImg} alt="" />
            </div>
            <div className="button">
                <button className='w-[216px] h-[44px] border border-[#000C1A] rounded-[32px] gap-1 px-[24px] py-[10px] text-[16px] font-bold font-inter hover:text-blue-500 hover:border-blue-500'>Contact us</button>
            </div>
        </div>
    )
}

export default Navbar
