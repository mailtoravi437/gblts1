import React from 'react'
import Eye from './assets/Eye.png';
import ClipPath from './assets/clippath.svg';
import ClipPathMb from './assets/clippathmb.svg';
import Badge from './assets/Badge.png';
import Mission from './assets/Mission.png'
import { FaCheck } from "react-icons/fa";


export default function Hero7() {
  return (
    <>
      <section className="bg-white flex justify-center py-16 px-8">
        <div className="grid max-w-screen-xl mx-auto gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
          <div className="xl:col-span-6 lg:col-span-6">
            <div className="w-[325px] h-[310px] xl:w-[588px] xl:h-[455px] bg-no-repeat p-10 flex flex-col justify-center mx-3" style={{ backgroundImage: `url(${window.innerWidth <= 1024 ? ClipPathMb : ClipPath})` }}>
              <div className='flex justify-between items-center w-4/5'>
                <h2 className='text-2xl xl:text-5xl font-bold text-[#001856]'>Our <br /> <span className='text-4xl xl:text-7xl font-bold'>Vision</span></h2>
                <img src={Eye} alt="Eye" className=' w-10 h-10 xl:w-20 xl:h-20' />
              </div>
              <div className=" mt-10">
                <p className='text-[#001856] text-base xl:text-xl font-normal'>To redefine the logistics landscape by providing a complete logistics solution that surpasses industry standards. We aim to set new benchmarks in safety, dependability, and quality service, becoming the most trusted logistics player in the industry.</p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-6 lg:col-span-6 lg:absolute lg:right-0 lg:top-[300px]">
            <div className=" w-[325px] h-[310px] xl:w-[588px] xl:h-[455px] bg-no-repeat p-10 flex flex-col justify-center mx-3" style={{ backgroundImage: `url(${window.innerWidth <= 1024 ? ClipPathMb : ClipPath})` }}>
              <div className='flex justify-between items-center w-4/5'>
                <h2 className=' text-2xl xl:text-5xl font-bold text-[#001856]'>Our <br /> <span className='text-4xl xl:text-7xl font-bold'>Values</span></h2>
                <img src={Badge} alt="Badge" className=' w-10 h-10 xl:w-20 xl:h-20' />
              </div>
              <div className=" mt-10">
                <p className='text-[#001856] text-base xl:text-xl font-normal'>We are committed to delivering excellence in every aspect of our operations. From cargo handling to transportation, we strive to exceed expectations and set a new standard for quality service.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 mt-12 md:mt-72">
            <div className=" border-2 border-[#001856] p-8 md:p-16 flex flex-col md:flex-row">
              <div className='flex lg:block justify-between md:w-2/5'>
                <h2 className=' text-2xl lg:text-5xl font-bold text-[#001856]'>Our <br /> <span className='text-4xl md:text-7xl  font-bold'>Mission</span></h2>
                <img src={Mission} alt="Mission" className=' w-10 h-10 lg:w-20 lg:h-20 mt-8' />
              </div>
              <div className=" md:w-3/5 mt-4 md:mt-0">
                <ul className='list-none'>
                  <li className='flex items-center mb-4'>
                    <p className='text-[#FF681E] mr-4 w-7 h-7 flex items-center'><FaCheck /></p>
                    <p className='text-[#001856] text-lg font-normal'>Foster Innovation and Technology.</p>
                  </li>
                  <li className='flex items-center mb-4'>
                    <p className='text-[#FF681E] mr-4 w-7 h-7 flex items-center'><FaCheck /></p>
                    <p className='text-[#001856] text-lg font-normal'>Implement eco-friendly practices in transportation operations.</p>
                  </li>
                  <li className='flex items-center mb-4'>
                    <p className='text-[#FF681E] mr-4 w-7 h-7 flex items-center'><FaCheck /></p>
                    <p className='text-[#001856] text-lg font-normal'>Cultivate strong, long-term partnerships with clients.</p>
                  </li>
                  <li className='flex items-center mb-4'>
                    <p className='text-[#FF681E] mr-4 w-7 h-7 flex items-center'><FaCheck /></p>
                    <p className='text-[#001856] text-lg font-normal'>Conduct business with integrity and transparency.</p>
                  </li>
                  <li className='flex items-center mb-4'>
                    <p className='text-[#FF681E] mr-4 w-7 h-7 flex items-center'><FaCheck /></p>
                    <p className='text-[#001856] text-lg font-normal'>Prioritize the training and development of our workforce.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
