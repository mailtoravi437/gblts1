import FooterLogo from "./assets/FooterLogo.svg";
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
      <section className="bg-gbltsblue px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-12 py-8">
            <div className="col-span-12 md:col-span-3 flex-shrink-0 items-start md:pt-10">
              <img
                className="h-auto w-auto "
                src={FooterLogo}
                alt="Your Company"
              />
            </div>
            <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row justify-around items-center justify-center text-gbltsgrey">
                <li>About</li>
                <li>Solutions</li>
                <li>Contact Us</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 flex justify-center mt-4 md:mt-0">
              {/* Social Media Icons */}
              <FontAwesomeIcon icon={faFacebook} className="text-white mx-2" />
              <FontAwesomeIcon icon={faInstagram} className="text-white mx-2" />
              <FontAwesomeIcon icon={faTwitter} className="text-white mx-2" />
              <FontAwesomeIcon icon={faLinkedin} className="text-white mx-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
