import Truck1 from './assets/hero1.png';
import Truck2 from './assets/hero2.png';
import Truck3 from './assets/hero3.png';
import Truck4 from './assets/hero4.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <section className="bg-white py-10 flex justify-center px-4">
        <div className=" max-w-screen-xl mx-auto lg:py-8">
          <div className="grid lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-6 ">
              <h1 className="max-w-2xl mb-4 font-extrabold uppercase tracking-tight leading-none text-2xl md:text-4xl lg:text-6xl text-[#001856]">
                Simplify<span className="text-gbltsorange"> Logistics </span>
                Streamlining Your Supply Chain
              </h1>
            </div>
            <div className="flex flex-col lg:mt-0 lg:col-span-6 lg:flex text-gbltsblue px-24">
              <p className="mb-4 lg:mb-0">
                An organization with the founder having over 3 decades of
                experience in the logistics space. Started with a humble
                beginning, the founder has delivered stellar results to the
                industry and his clients with his values, integrity, hard work,
                and commitment.
              </p>
              <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 mt-10 bg-gbltsorange inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-slate-100">
                <div className="text-white font-bold">CONTACT US</div>
              </div>
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
            className="mySwiper w-full h-[880px] md:h-[600px] mt-12">
            <SwiperSlide>
              <img src={Truck1} alt="" className="w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Truck2} alt="" className="w-full object-cover" />
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
