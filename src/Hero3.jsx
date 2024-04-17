import Founder from "./assets/Anil.png";

const Hero3 = () => {
  return (
    <>
      <section className="bg-[#F7F7F8] pt-8 flex justify-center py-16">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className="place-self-center lg:col-span-1">
            <div className="mx-0 p-0">
              <img
                src={Founder}
                alt="Founder"
                className="w-full h-full object-cover m-0 p-0"
              />
            </div>
          </div>
          <div className="flex flex-col mx-auto mt-4 lg:mt-0 lg:col-span-1 lg:flex text-gbltsblue px-8 md:px-24">
            <div className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase font-face-incf">
              About founder
            </div>
            <p className="font-normal text-base md:text-lg text-[#001856] mt-4 sm:mt-8">
              In 1946, the family business KB Transport was founded in Howrah, later renamed Howrah Readiness in 1980, diversifying into specialised services like factory setups and explosive transport. Late Anil Kumar Singh joined in the early 1980s, significantly enhancing the company's operations and reputation. His outstanding work and relationship-building skills not only elevated the organization but also established his own legacy in the industry.
            </p>
            <p className="font-normal text-base md:text-lg text-[#001856] mt-4 sm:mt-8">
              In the late 2000 he founded GB Lifting & Transportation System to achieve his own dreams and start his Entrepreneurial Journey. Naturally it was a difficult job to wear so many hats. He had been successful in his endeavours and found happiness in reflecting on what he had achieved during his lifetime. Although he is no longer with us, his legacy lives on. Despite the dreams he had yet to fulfill, he had laid a foundation for others to continue and had plans to guide the company to new heights.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
