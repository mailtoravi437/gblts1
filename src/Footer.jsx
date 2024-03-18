import FooterLogo from "./assets/FooterLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-gbltsblue py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 justify-center items-center">
            <div className="col-span-12 md:col-span-3 flex-shrink-0 items-start md:pt-10">
              <img
                className="h-auto w-auto "
                src={FooterLogo}
                alt="Your Company"
              />
            </div>
            <div className="col-span-12 md:col-span-5 mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row justify-around items-center text-base font-medium text-gray-400">
                <Link to={""}><li>About</li></Link>
                <Link to={""}><li>Solutions</li></Link>
                <Link to={""}><li>Contact Us</li></Link>
                <Link to={""}><li>Blog</li></Link>
              </ul>
            </div>
            {/* <div className="col-span-12 md:col-span-3 flex justify-center mt-4 md:mt-0">
              <FontAwesomeIcon icon={faFacebook} className="text-white mx-2" />
              <FontAwesomeIcon icon={faInstagram} className="text-white mx-2" />
              <FontAwesomeIcon icon={faTwitter} className="text-white mx-2" />
              <FontAwesomeIcon icon={faLinkedin} className="text-white mx-2" />
            </div> */}
            <div className="col-span-12 md:col-span-4 md:text-end">
              <p className=" text-sm font-semibold text-gray-400">© 2023 GBLTS Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
