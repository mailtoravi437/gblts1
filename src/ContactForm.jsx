import React from "react";
import HeroImage from "./assets/Hero2.svg";

const ContactForm = () => {
  return (
    <>
      <section className="bg-gbltsblue">
        <div className="grid max-w-screen-xl mx-auto pl-2 pt-10 lg:gap-8 xl:gap-0 lg:grid-cols-12 container">
          <div className="mr-auto place-self-center lg:col-span-6 text-white font-medium lg:pr-48">
            <h1 className="max-w-2xl tracking-tight leading-none text-white mb-4 md:text-5xl xl:text-6xl sm:text-4xl font-extrabold uppercase">
              Get in touch with us today.
            </h1>
            <p className="py-4 lg:py-10">
              Whether you're a small business looking to expand or a large
              enterprise seeking to streamline your operations, GBLTS is here to
              cater to your unique logistics needs. Experience the difference of
              working with a partner who is dedicated to your success. Trust
              GBLTS - your logistics, our commitment.
            </p>
          </div>
          <div className="flex flex-col px-10 lg:mt-0 lg:col-span-6 lg:flex">
            <h1 className="max-w-2xl tracking-tight leading-none text-white mb-4 md:text-5xl xl:text-6xl sm:text-4xl font-extrabold uppercase">
              Contact
            </h1>{" "}
            <form>
              <div className="mb-4 border-b border-gbltsblue">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mt-1 p-2 w-full bg-gbltsblue uppercase text-gbltsgrey border-b mt-8 border-gbltsgrey focus:outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div className="mb-4 border-b border-gbltsblue">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full bg-gbltsblue uppercase text-gbltsgrey border-b mt-8 border-gbltsgrey focus:outline-none"
                  placeholder="Email"
                />
              </div>

              <div className="border-b border-gbltsblue">
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="3"
                  className="mt-1  w-full bg-gbltsblue uppercase text-gbltsgrey border-b mt-8 border-gbltsgrey focus:outline-none"
                  placeholder="Enter your requirements..."></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="lg:w-1/3 md:w-1/3 sm:w-1/3 mt-10 bg-gbltsorange inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-slate-100">
                  <div className="text-white font-bold">SUBMIT</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
