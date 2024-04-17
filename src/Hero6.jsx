import { Link } from "react-router-dom";
import Trusted from "./assets/trusted1.png";
import { MdArrowOutward } from "react-icons/md";

const Hero6 = () => {
  return (
    <>
      <section className="bg-whit flex justify-center py-8" id="blog">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className="place-self-center lg:col-span-1">
            <div className="mx-0 p-0">
              <img
                src={Trusted}
                alt="Founder"
                className="w-full h-full object-cover m-0 p-0"
              />
            </div>
          </div>
          <div className="flex flex-col mx-auto mt-4 lg:mt-0 lg:col-span-1 lg:flex text-gbltsblue px-8 md:pl-16">
            <p className=" text-lg font-semibold text-gray-400 font-inter">BLOGS</p>
            <div className="max-w-2xl mt-3 mb-4 tracking-wide text-2xl font-extrabold uppercase leading-none md:text-4xl text-gbltsblue">
              Your<br></br> <span className="text-gbltsorange">Trusted </span>
              Logistics Companion
            </div>
            <div className="font-normal font-inter text-base md:text-lg text-[#001856] mt-3">
              With over 3 decades of logistics expertise, GB Lifting &
              Transportation System brings stellar results to the industry. Our
              founder's values, integrity, hard work, and commitment have paved
              the way for our humble beginnings.
            </div>
            <Link to={"#"}>
              <button className="bg-gbltsorange mt-8 flex items-center justify-center px-6 py-4 text-base font-semibold text-center text-slate-100">
                READ MORE <MdArrowOutward className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero6;
