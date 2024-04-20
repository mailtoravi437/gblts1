// Import SVG images
import ProjectCargo from "./assets/projectCargo.svg";
import ValuableCargo from "./assets/valuableCargo.svg";
import Warehousing from "./assets/warehousing.svg";
import Consulting from "./assets/consulting.svg";
import Portpresentation from "./assets/portrepresentation.svg";
import Relocation from "./assets/relocation.svg";
import Car from "./assets/car.svg";
import MaterialTransport from "./assets/materialtransport.svg";
import Badge from "./assets/Badge.svg";

const Hero5 = () => {
  const categories = [
    {
      title: "Project Cargo Transportation",
      icon: ProjectCargo,
      description: `Our skilled Project Logistics experts, from management to operations, have efficiently managed diverse industrial shipments in Energy, Oil & Gas, Mining, Metals, and more. We handle plant and machinery imports/exports across manufacturing sectors.`
    },
    {
      title: "valuable Cargo Solutions",
      icon: ValuableCargo,
      description:`We are engaged in transportation and handling of highly sensitive security material from over 3 decades and have gained an expertise in the said field like News Print and high security material.`
    },
    {
      title: "Warehousing divisions",
      icon: Warehousing,
      description: `The Warehousing divisions offers specialised tailor made solutions for storage of cargo as per their nature.`
    },
    {
      title: "Consulting and Advisory",
      icon: Consulting,
      description: `We have profound experience of the Industry and understanding of the landscape of India. This knowledge enables us to help you with solving your most difficult logistics problems`
    },
    {
      title: "Port Representation",
      icon: Portpresentation,
      description: `We can help you in Customs clearance and Port Representation.`
    },
    {
      title: "Relocation and Household Shifting",
      icon: Relocation,
      description: `We provide complete door to door relocation and household shifting`
    },
    {
      title: "Expensive and Luxurious cars",
      icon: Car,
      description: `We have the experience to move expensive and luxurious cars`
    },
    {
      title: "Exhibition and Material Transport",
      icon: MaterialTransport,
      description: `Tailor made solution to transport exhibition and material handling`
    },
    {
      title: `Leasing  &frasl;  Renting of Containers`,
      icon: Badge,
      description: `We offer 40 feet and 20 feet containers on Lease/Rent basis`
    },
  ];

  return (
    <>
      <section className="bg-white pb-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div key={index} className="border border-gbltsblue p-8 h-96">
                <div className="flex justify-center items-center mb-4 w-12 rounded-full bg-primary-100 dark:bg-primary-900">
                  <img src={category.icon} alt={category.title} />
                </div>
                <h3 className="mb-2 text-2xl font-bold  text-gbltsblue h-16 font-face-incf" dangerouslySetInnerHTML={{ __html: category.title }}>
                </h3>
                <p className="text-[#001856] text-base font-normal">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero5;
