import React from 'react'

const Form = () => {
    return (
        <div className='absolute w-full h-[900px] top-[9657px]'>
            <div className='absolute w-[752px] h-[136px] top-[143px] left-[424px] flex flex-col gap-[16px]'>
                <h3 className='font-montserrat font-extrabold text-[32px] text-center'>Connect with Our Digital Marketing Experts</h3>
                <p className='font-opensans text-[24px] text-center'>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
            </div>

            <form className='absolute w-[904px] h-[424px] top-[342.5px] left-[348px] rounded-[16px] py-[32px] px-[56px] gap-[32px] flex flex-col border  bg-white' action="">
                <div className=' flex gap-[32px] w-[792px] h-[360px] '>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[12px]'>
                            <label htmlFor="" className='font-inter font-semibold text-[16px]'>Name</label>
                            <input type="text" className='border bg-[#FCFCFC] border-[#C7C7C7] py-[8px] px-[12px] w-[380px] h-[44px] rounded-[4px] ' placeholder='Enter your name' />
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <label htmlFor="" className='font-inter font-semibold text-[16px]'>Phone</label>
                            <input type="text" className='border bg-[#FCFCFC] border-[#C7C7C7] py-[8px] px-[12px] w-[380px] h-[44px] rounded-[4px] ' placeholder='Enter your number' />
                        </div>
                        <div className='flex flex-col gap-[12px]'>
                            <label htmlFor="" className='font-inter font-semibold text-[16px]'>Email</label>
                            <input type="text" className='border bg-[#FCFCFC] border-[#C7C7C7] py-[8px] px-[12px] w-[380px] h-[44px] rounded-[4px] ' placeholder='Enter your Total No. of Vehicles:' />
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col gap-[12px]'>
                            <label htmlFor="" className='font-inter font-semibold'>Message</label>
                            <textarea name="" id="" className='border bg-[#FCFCFC] border-[#C7C7C7] w-[380px] h-[235px] rounded-[4px] py-[8px] px-[12px]' placeholder='Enter your message'></textarea>
                        </div>
                    </div>

                </div>
                
                <div className='flex justify-center'>
                <button className='w-[408px] h-[56px] rounded-[32px] text-white bg-[#0078FF] py-[13px] px-[136px] font-montserrat font-bold text-[23px] '>Get started</button>
                </div>
            </form>
        </div>
    )
}

export default Form
