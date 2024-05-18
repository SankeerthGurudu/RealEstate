import React from 'react'
import LogoImg from '../img/logo.png'
import mail from '../img/footer/mail.png'
import phone from '../img/footer/phone.png'
import X from '../img/footer/X.png'
import facebook from '../img/footer/facebook.png'
import youtube from '../img/footer/youtube.png'
import pinterest from '../img/footer/pinterest.png'
import whatsapp from '../img/footer/whatsapp.png'
import insta from '../img/footer/insta.png'

const Footer = () => {
    return (
        <div className='absolute w-[1280px] h-[713px] top-[10653px] left-[130px]'>
            <div className='frame-430 w-[1280px] h-[657px] rounded-[32px] bg-footer-gradient'>

                <div className='frame-253 absolute w-[365px] h-[120px] top-[56px] left-[43px]'>
                    <img className='w-[137px] ' src={LogoImg} alt="" />
                    <p className='font-opensans text-[16px] mt-[-16px]'>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
                </div>

                <div className="frame-80 absolute w-[196px] h-[131px] top-[263px] left-[43px] flex flex-col gap-[8px] mt-[24px]">
                    <h3 className='font-montserrat font-bold text-[18px]'>Address</h3>
                    <p className='font-opensans text-[16px]'>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
                </div>

                <div className="fram-291 w-[192px] h-[124px] absolute top-[426px] left-[43px] flex flex-col gap-[14px] mt-[24px]">
                    <h3 className='font-inter font-bold text-[24px]'>Contacts</h3>
                    <div className='flex'>
                        <img src={mail} alt="" />
                        <p>hello@osumare.in</p>
                    </div>
                    <div className="flex">
                        <img src={phone} alt="" />
                        <p>+91 8459 8762 26</p>
                    </div>
                </div>

                <div className="frame-292 w-[72px] h-[304px] absolute top-[56px] left-[653px] flex flex-col gap-[32px]">
                    <h3 className='font-montserrat font-bold text-[24px] text-center'>Menu</h3>
                    <div className='flex flex-col gap-[16px]'>
                        <p className='font-montserrat font-[500px] text-[16px]'>Home</p>
                        <p className='font-montserrat font-[500px] text-[16px]'>About</p>
                        <p className='font-montserrat font-[500px] text-[16px]'>Services</p>
                        <p className='font-montserrat font-[500px] text-[16px]'>Work</p>
                        <p className='font-montserrat font-[500px] text-[16px]'>Blog</p>
                        <p className='font-montserrat font-[500px] text-[16px]'>Career</p>
                    </div>
                </div>

                <div className="frame-250 w-[280px] h-[176px] absolute top-[56px] left-[965px] flex flex-col gap-[24px]">
                    <h3 className='font-montserrat font-bold text-[24px]'>Social</h3>
                    <div className='w-[280px] h-[104px] flex flex-col gap-[24px]'>
                        <div className='flex gap-[24px]'>
                        <img className='w-[40px] h-[40px]' src={X} alt="" />
                        <img className='w-[40px] h-[40px]' src={facebook} alt="" />
                        <img className='w-[40px] h-[40px]' src={youtube} alt="" />
                        <img className='w-[40px] h-[40px]' src={pinterest} alt="" />
                        </div>
                        <div className='flex gap-[24px]'>
                        <img className='w-[40px] h-[40px]' src={whatsapp} alt="" />
                        <img className='w-[40px] h-[40px]' src={insta} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-[26px]'>
            <p className='font-montserrat font-[500px] text-[16px]'>© 2023 Osumare. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
