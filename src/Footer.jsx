import FooterLogo from "./assets/FooterLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <section className="bg-gbltsblue py-8 px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-shrink-0 items-start">
              <img
                className="h-auto w-auto "
                src={FooterLogo}
                alt="Your Company"
              />
            </div>
            <div className=" mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row justify-around items-center gap-x-8 text-base font-medium text-gray-400">
                <HashLink to={"/#aboutus"}><li>About</li></HashLink>
                <HashLink to={"/#solutions"}><li>Solutions</li></HashLink>
                <HashLink to={"/#contactus"}><li>Contact Us</li></HashLink>
                <HashLink to={""}><li>Blog</li></HashLink>
              </ul>
            </div>
            {/* <div className="col-span-12 md:col-span-3 flex justify-center mt-4 md:mt-0">
              <FontAwesomeIcon icon={faFacebook} className="text-white mx-2" />
              <FontAwesomeIcon icon={faInstagram} className="text-white mx-2" />
              <FontAwesomeIcon icon={faTwitter} className="text-white mx-2" />
              <FontAwesomeIcon icon={faLinkedin} className="text-white mx-2" />
            </div> */}
            <div className=" md:text-end mt-8 md:mt-0">
              <p className=" text-sm font-semibold text-gray-400 text-center md:text-end">© 2023 GBLTS Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
