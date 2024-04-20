import Truck1 from './assets/hero1.png';
import Truck2 from './assets/hero2.png';
import Truck3 from './assets/hero3.png';
import Truck4 from './assets/hero4.png';
import Truck5 from './assets/hero5.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <>
      <section className="bg-white py-10 flex justify-center px-4">
        <div className=" max-w-screen-xl mx-auto lg:py-8">
          <div className="grid lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7 ">
              <h1 className=" mb-4 font-extrabold font-face-incf uppercase tracking-tight leading-none text-2xl md:text-4xl lg:text-6xl text-[#001856]">
                Simplify<span className="text-gbltsorange"> Logistics </span>
                Streamlining Your Supply Chain
              </h1>
            </div>
            <div className="flex flex-col lg:mt-0 lg:col-span-5 lg:flex md:px-12">
              <p className="mb-4 lg:mb-0 font-inter text-[#09092A]">
                An organization with the founder having over
                4 decades of experience in logistics space. Started
                with a humble beginning the founder has delivered
                stellar results to the industry and his clients with his values, integrity, hard work and commitment.
              </p>
              <HashLink to={"/#contactus"}>
                <button className="bg-gbltsorange mt-8 flex items-center justify-center px-6 py-4 text-lg font-face-incf font-medium text-center text-slate-100">
                  CONTACT US
                </button>
              </HashLink>
            </div>
          </div>
          <Swiper slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              infinite: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper w-full h-[210px] md:h-[600px] mt-12">
            <SwiperSlide>
              <img src={Truck1} alt="" className="w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Truck2} alt="" className="w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Truck5} alt="" className="w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Truck3} alt="" className="w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Truck4} alt="" className="w-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
