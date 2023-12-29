import Founder from "./assets/Founder.svg";

const Hero6 = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 pt-8 flex justify-center">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2 mx-4">
          <div className="place-self-center lg:col-span-1">
            <div className="mx-0 p-0">
              <img
                src={Founder}
                alt="Founder"
                className="w-full h-full object-cover m-0 p-0"
              />
            </div>
          </div>
          <div className="flex flex-col mx-auto lg:mt-0 lg:col-span-1 lg:flex text-gbltsblue p-4">
            <div className="max-w-2xl mb-4 tracking-wide text-4xl font-extrabold uppercase tracking-tight leading-none md:text-5xl xl:text-6xl text-gbltsblue">
              Your<br></br> <span className="text-gbltsorange">Trusted </span>
              Logistics Companion
            </div>
            <div className="font-normal text-base sm:text-lg lg:text-lg text-gbltsblue mt-4 sm:mt-8">
              With over 3 decades of logistics expertise, GB Lifting &
              Transportation System brings stellar results to the industry. Our
              founder's values, integrity, hard work, and commitment have paved
              the way for our humble beginnings.
            </div>
            <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 mt-6 bg-gbltsorange inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-slate-100">
              <div className="text-white font-bold">READ MORE</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero6;
