import Founder from "./assets/Founder.svg";

const Hero3 = () => {
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
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase">
              About founder
            </div>
            <div className="font-normal text-base sm:text-lg lg:text-lg text-gbltsblue mt-4 sm:mt-8">
              He joined the Family business early on in the 1980’s and continued
              to shoulder the responsibility of operations in the Organization.
              He made a name for the organization and for himself by setting
              excellent standards for his work. He has seen it all and
              experienced the change in the industry and the landscape. With his
              excellent work and relationship-building skills, he has won many
              hearts.
            </div>
            <div className="font-normal text-base sm:text-lg lg:text-lg text-gbltsblue mt-4 sm:mt-8">
              In the late 2000s, he founded GB Lifting & Transportation System
              to achieve his own dreams and start his entrepreneurial journey.
              Naturally, it was a difficult job to wear so many hats. He has
              been successful in his endeavors and is happy about what he has
              achieved so far. He still has many dreams to fulfill and plans to
              take the company to new heights.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
