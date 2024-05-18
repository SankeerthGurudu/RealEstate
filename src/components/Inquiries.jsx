import React from 'react'
import house2 from '../img/house2.png'

const Inquiries = () => {
    return (
        <div className='absolute top-[4328px] left-[120px] w-[1278px] h-[108px] '>
            <div className='flex flex-col gap-4'>
                <h3 className='font-montserrat font-bold text-[32px] text-center'> Driving Property Inquiries to Conversions</h3>
                <p className='font-opensans text-[24px] text-center'>Streamlined Strategies for Real Estate Success</p>
            </div>

            <div className='absolute top-[150px]'>
                <div className='flex gap-[98px]'>
                    <img src={house2} alt="" />
                    <div>
                        <h3 className='font-montserrat font-bold text-[32px]'>Optimized Path to Property Purchase</h3>
                        <p className='font-opensans text-[24px]'>In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</p>
                    <button className='bg-[#0078FF] rounded-[32px] py-[16.5px] px-[64px] text-white font-montserrat font-semibold text-[18px] mt-[32px]'>Get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inquiries
