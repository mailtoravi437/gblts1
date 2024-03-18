import Truck from "./assets/Truck.svg";

const Hero4 = () => {
  return (
    <>
      <section className="bg-white flex justify-center py-8">
        <div className="grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 pr-4">
            {/* Add pr-4 class for slight padding from the right */}
            <div className="max-w-2xl mb-4 text-4xl font-extrabold uppercase tracking-tight leading-none md:text-5xl xl:text-6xl text-gbltsblue">
              Solutions that<br></br>{" "}
              <span className="text-gbltsorange">We offer</span>
            </div>
            <div className="lg:w-1/3 md:w-1/3 sm:w-1/3 mt-6 bg-gbltsorange inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-slate-100">
              <div className="text-white font-bold">CONTACT US</div>
            </div>
          </div>
          <div className="flex flex-col lg:mt-0 lg:col-span-6 lg:flex text-gbltsblue">
            <div className="text-gbltsblue text-lg mb-12">
              With the range of logistics services we have to offer, we promise
              to handle your entire Logistics requirement towards Warehousing,
              Distribution, Transportation of Project Materials, Highly
              Sensitive Security Materials, Newsprints, Break Bulk Cargo or Odd
              Dimension consignment Movements.
            </div>
            <div className="text-gbltsblue text-lg">
              We outshine competitors with unwavering commitment, on-time
              deliveries, competitive rates, and professional service. Clients
              across the nation rely on our specialized knowledge and
              experience. Our fleet includes various vehicles, strengthening our
              logistics capabilities.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero4;
