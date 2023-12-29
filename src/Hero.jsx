import Truck from "./assets/Truck.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-white px-2 py-10 flex justify-center px-4">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 mx-4">
          <div className="mr-auto place-self-center lg:col-span-6 p-4 ">
            {/* Add pr-4 class for slight padding from the right */}
            <h1 className="max-w-2xl mb-4 font-extrabold uppercase tracking-tight leading-none md:text-5xl xl:text-6xl sm:text-4xl dark:text-white">
              Simplify<span className="text-gbltsorange"> Logistics </span>
              Streamlining Your Supply Chain
            </h1>
          </div>
          <div className="flex flex-col lg:mt-0 lg:col-span-6 lg:flex text-gbltsblue p-4">
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
          <div className="lg:col-span-12 mt-10">
            {/* Add w-full class to make the Truck image container full width */}
            <div className="w-full">
              <img
                src={Truck}
                alt="Truck Logo"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
