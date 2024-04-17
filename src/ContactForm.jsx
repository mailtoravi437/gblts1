import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import Phone from './assets/Phone.png';
import Email from './assets/Email.png';

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   email: '',
  //   requirements: ''
  // });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await fetch('./php/ContactUsEmail.php', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const responseData = await response.json();
    //   if (response.ok && responseData.success) {
    //     console.log('Form submitted successfully');
    //     setFormData({
    //       fullName: '',
    //       email: '',
    //       requirements: ''
    //     });
    //     setIsSubmitted(true);
    //     setTimeout(() => {
    //       setIsSubmitted(false);
    //     }, 3000);
    //   } else {
    //     console.log('Form submission failed');
    //   }
    // } catch (error) {
    //   console.log('An error occurred. Please try again later.');
    // }
    // console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="py-32" id="contactus">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 container bg-gbltsblue p-8 md:p-16">
          <div className="mr-auto lg:col-span-7 text-white font-medium lg:pr-32">
            <h1 className=" tracking-tight leading-none text-white mb-4 text-2xl md:text-4xl font-bold uppercase font-face-incf">
              Get in touch<br />
              with us today.
            </h1>
            <p className="py-4 lg:py-10 text-lg font-normal font-inter">
              Whether you're a small business looking to expand or a large
              enterprise seeking to streamline your operations, GBLTS is here to
              cater to your unique logistics needs. Experience the difference of
              working with a partner who is dedicated to your success. Trust
              GBLTS - your logistics, our commitment.
            </p>
            <div className="">
              <ul className="">
                <li className="flex my-4">
                  <img src={Phone} alt="Phone" className="w-6 h-6" />
                  <p className=" text-base font-medium ml-3">+91 9331154333</p>
                </li>
                <li className="flex my-4">
                  <img src={Phone} alt="Phone" className="w-6 h-6" />
                  <p className=" text-base font-medium ml-3">033-2641-1409</p>
                </li>
                <li className="flex items-center my-4">
                  <img src={Email} alt="Email" className="w-6 h-6" />
                  <p className=" text-base font-medium ml-3">care@gblts.in</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center pt-8 md:pt-0 px-0 md:px-8 lg:mt-0 lg:col-span-5 lg:flex">
            {isSubmitted ? (
              <div className="flex flex-col items-center">
                < div className=" w-24 h-24 bg-[#FF681E] rounded-full flex justify-center items-center">
                  <MdCheck className=" w-16 h-16 text-white" />
                </div>
                <p className=" text-xl font-bold text-white">Submitted</p>
              </div>
            ) : (
              <>
                <h1 className="max-w-2xl tracking-tight leading-none text-white mb-4 md:text-5xl xl:text-6xl sm:text-4xl font-extrabold uppercase font-face-incf">
                  Contact
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 border-b border-gbltsblue">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="p-2 w-full bg-gbltsblue uppercase text-gbltsgrey border-b mt-8 border-gbltsgrey focus:outline-none"
                      placeholder="Full Name"
                      // value={formData.fullName}
                      // onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4 border-b border-gbltsblue">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className=" p-2 w-full bg-gbltsblue uppercase text-gbltsgrey border-b mt-8 border-gbltsgrey focus:outline-none"
                      placeholder="Email"
                      // value={formData.email}
                      // onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="border-b border-gbltsblue">
                    <textarea
                      id="requirements"
                      name="requirements"
                      className="p-2 pb-0 resize-none w-full bg-gbltsblue uppercase text-gbltsgrey border-b mt-8 border-gbltsgrey focus:outline-none"
                      placeholder="Requirements"
                      // value={formData.requirements}
                      // onChange={handleChange}
                      required></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="lg:w-1/3 md:w-1/3 sm:w-1/3 mt-10 bg-gbltsorange inline-flex items-center justify-center px-6 py-4 text-base font-medium text-center text-slate-100">
                      <div className="text-white font-bold font-face-incf">SUBMIT</div>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
