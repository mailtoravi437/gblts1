import Hero from "./assets/Hero2.svg";

const Hero7 = () => {
  return (
    <>
      <section className="bg-gbltsblue dark:bg-gray-900 antialiased">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 text-white font-medium pr-4 lg:pr-48">
            <h1 className="max-w-2xl text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-none">
              Your <span className="text-gbltsorange">Trusted </span>Logistics
              Companion
            </h1>
            <p className="py-4 lg:py-10">
              With over 3 decades of logistics expertise, GB Lifting &
              Transportation System brings stellar results to the industry. Our
              founder's values, integrity, hard work, and commitment have paved
              the way for our humble beginnings.
            </p>
            <p>
              We're your comprehensive logistics solution, well-versed in cargo
              handling, warehousing, transportation, and more. Our services
              extend to custom clearance at Dock and Airport, ensuring a
              seamless experience.
            </p>
          </div>
          <div className="flex flex-col lg:mt-0 lg:col-span-6 lg:flex">
            <img
              src={Hero}
              className="h-full w-full object-left-top lg:ml-0 lg:mt-0 lg:mb-0 lg:pr-0"
              alt="Hero Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero7;
