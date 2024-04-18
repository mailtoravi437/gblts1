import HeroImage from "./assets/trusted.png";

const Hero2 = () => {
  return (
    <>
      <section className="bg-gbltsblue py-8 md:py-0 px-4" id="aboutus">
        <div className="grid max-w-screen-xl mx-auto pl-2 lg:gap-8 xl:gap-0 lg:grid-cols-12 container">
          <div className="mr-auto place-self-center lg:col-span-7 text-white font-medium lg:pr-48 py-12">
            <h1 className=" text-white mb-4 sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-face-incf uppercase">
              Your <br /><span className="text-gbltsorange">Trusted </span>Logistics
              Companion
            </h1>
            <p className="py-4 lg:py-10 font-inter text-lg font-normal">
              With over 4 decades of logistics expertise, GB Lifting & Transportation System brings stellar results to the industry. Our founder's values, integrity, hard work, and commitment have paved the way for our humble beginnings.
              <br />
              <br />
              We're your comprehensive logistics solution, well-versed in cargo handling, warehousing, transportation, and more. Our services extend to custom clearance at Dock and Airport, ensuring a seamless experience.
            </p>
          </div>
          
          <div className="flex flex-col mt-4 lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={HeroImage}
              className="h-full w-full object-left-top lg:ml-0 lg:mt-0 lg:mb-0 lg:pr-0"
              alt="Hero Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
