import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./assets/GBLTSLogo.svg";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Solutions", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-6">
        <div className=" flex h-12 items-center justify-center">
          <p className="text-gbltsorange text-base font-semibold">- ॐ श्री गणेशाय नमः -</p>
        </div>
      </div>
      <Disclosure as="nav" className="font-navfont border-y border-[#001856]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen-xl px-6">
              <div className=" grid grid-cols-12 h-20 items-center justify-between">
                {/* Logo Section */}
                <div className="col-span-6 flex-shrink-0 items-center">
                  <img className="h-auto w-auto" src={Logo} alt="Your Company" />
                </div>

                {/* Mobile menu button */}
                <div className="col-span-6 sm:hidden flex items-center justify-end">
                  <Disclosure.Button className="relative inline-flex items-center justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Navigation Section */}
                <div className="hidden col-span-6 sm:block h-full">
                  <div className="flex space-x-4 h-full justify-evenly">
                    {navigation.map((item, i) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-gbltsorange"
                            : "text-gbltsblue hover:text-gbltsorange",
                          "px-2 py-2 text-sm font-medium h-full flex items-center justify-center " +
                          (navigation.length - 1 === i
                            ? "border-l border-black pl-8"
                            : "")
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        <p className=" text-xl font-bold">{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <Disclosure.Panel className="sm:hidden col-span-12">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-2 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
