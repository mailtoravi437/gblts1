import { HashLink } from "react-router-hash-link";
import Truck from "./assets/Truck.svg";

const Hero4 = () => {
  return (
    <>
      <section className="bg-white flex justify-center py-16 px-8" id="solutions">
        <div className="grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 pr-4">
            <div className="max-w-2xl mb-4 text-4xl font-extrabold uppercase tracking-tight leading-none md:text-5xl xl:text-6xl text-gbltsblue font-face-incf">
              Solutions that<br></br>{" "}
              <span className="text-gbltsorange">We offer</span>
            </div>
            <HashLink to={"/#contactus"}>
              <button className="bg-gbltsorange mt-8 flex items-center justify-center px-6 py-4 text-base font-semibold font-face-incf text-center text-slate-100">
                CONTACT US
              </button>
            </HashLink>
          </div>
          <div className="flex flex-col mt-4 lg:mt-0 lg:col-span-6 lg:flex">
            <p className=" text-base md:text-lg mb-8 text-[#001856] font-inter font-normal">
              With the range of logistics services we have to offer, we promise to handle your entire Logistics requirement towards Warehousing, Distribution, Transportation of Project Materials, Highly Sensitive Security Materials, Newsprints, Break Bulk Cargo or Odd Dimension consignment Movements.
              <br />
              <br />
              We outshine competitors with unwavering commitment, on-time deliveries, competitive rates, and professional service. Clients across the nation rely on our specialized knowledge and experience. Our fleet includes various type of vehicles, strengthening our logistics capabilities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero4;
