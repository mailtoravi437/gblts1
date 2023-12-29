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
      title: "Marketing",
      icon: ProjectCargo,
      description:
        "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
    },
    {
      title: "Legal",
      icon: ValuableCargo,
      description:
        "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
    },
    {
      title: "Business Automation",
      icon: Warehousing,
      description:
        "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
    },
    {
      title: "Finance",
      icon: Consulting,
      description:
        "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
    },
    {
      title: "Enterprise Design",
      icon: Portpresentation,
      description:
        "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
    },
    {
      title: "Operations",
      icon: Relocation,
      description:
        "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    },
    {
      title: "Operations",
      icon: Car,
      description:
        "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    },
    {
      title: "Operations",
      icon: MaterialTransport,
      description:
        "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    },
    {
      title: "Operations",
      icon: Badge,
      description:
        "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    },
  ];

  return (
    <>
      <section className="bg-white dark:bg-gray-900 px-4">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div key={index} className="border border-gbltsblue p-6">
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900">
                  <img src={category.icon} alt={category.title} />
                </div>
                <h3 className="mb-2 text-lg font-bold dark:text-white">
                  {category.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
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
