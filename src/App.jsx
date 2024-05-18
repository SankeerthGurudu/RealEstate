import { useState } from 'react'
import './App.css'
import bgImg from './img/bg-1.png'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Service from './components/Service'
import Navigation from './components/Navigation'
import Inquiries from './components/Inquiries'
import Inquiries2 from './components/Inquiries2'
import Expertise from './components/Expertise'
import Peace from './components/Peace'
import FAQ from './components/FAQ'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <div className='bg-gradient-radial from-[#80BBFF] to-white w-[490px] h-[576px] absolute top-[225.63px] left-[900.8px] opacity-[0.5]  -rotate-140.53 blur-[167.5px] '></div>

      <div className="bg_img">
        <img className='absolute w-[99.8%] h-[1024px] top-[3px] left-[3px] opacity-[0.6]' src={bgImg} alt="" />
      </div>
      <Service />
      <Navigation />
      <Inquiries />
      <Inquiries2 />
      <Expertise />
      <div className='bg-gradient-radial from-[#409AFF] to-white w-[381.87px] h-[630.4px] absolute top-[7258.82px] left-[30.8px] opacity-[0.5]  -rotate-140.53 blur-[167.5px] '></div>
      <div className='bg-gradient-radial from-[#FF725E] to-white w-[381.87px] h-[530.4px] absolute top-[7200.82px] left-[1010.8px] opacity-[0.5]  -rotate-140.53 blur-[167.5px] '></div>
      <Peace />
      <FAQ />
      <div className='bg-gradient-radial from-[#409AFF] to-white w-[381.87px] h-[530.4px] absolute top-[9725.82px] left-[62.43px] opacity-[0.5]  -rotate-140.53 blur-[167.5px] '></div>
      <div className='bg-gradient-radial from-[#FF725E] to-white w-[381.87px] h-[530.4px] absolute top-[9725.82px] left-[1012.43px] opacity-[0.5]  -rotate-140.53 blur-[167.5px] '></div>
      <Form />
      <Footer />
    </>
  )
}

export default App
