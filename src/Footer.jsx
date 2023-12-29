import GBLTSLogo from "./assets/GBLTSLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="bg-gbltsblue max-w-screen-xl">
        <div className="grid grid-cols-12 py-8">
          <div className="col-span-3 flex-shrink-0 items-center pt-10">
            <img
              className="h-auto w-auto bg-white"
              src={GBLTSLogo}
              alt="Your Company"
            />
          </div>
          <div className="col-span-6">
            <ul className="flex flex-row justify-around text-gbltsgrey">
              <li>About</li>
              <li>Solutions</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-span-3 flex justify-center items-center">
            {/* Social Media Icons */}
            <FontAwesomeIcon icon={faFacebook} className="text-white mx-2" />
            <FontAwesomeIcon icon={faInstagram} className="text-white mx-2" />
            <FontAwesomeIcon icon={faTwitter} className="text-white mx-2" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white mx-2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
