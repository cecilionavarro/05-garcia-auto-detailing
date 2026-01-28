import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import ScrollVelocity from "../components/ui/ScrollVelocity";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-6 px-5 py-10 md:px-10 md:py-20 gap-5">
        <div className="flex flex-col gap-5 col-span-4 md:col-span-2">
          <h3 className="font-bold border-b pb-2">INFORMATION</h3>
          <a href="tel:+16618622372" className="hover:text-accent">
            661 862 2372
          </a>
          <a
            href="mailto:garciadetails84@gmail.com"
            className="hover:text-accent"
          >
            garciadetails84@gmail.com
          </a>
          <div className="-ml-1 flex gap-2">
            <a
              href="https://www.tiktok.com/@garcia.auto.detailing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <div className="bg-dark p-1 rounded-md hover:bg-accent">
                <FaTiktok className="text-4xl text-light" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/garcia.auto.detailing/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <div className="bg-dark p-1 rounded-md hover:bg-accent">
                <FaInstagram className="text-4xl text-light" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/people/Brian-Garcia/pfbid0CDckbtWx7DNei4M3jWqJ3GVWq4xSCxNipgBih4rqt95NU4LdxwijquXE2qfMwLb9l/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <div className="bg-dark p-1 rounded-md hover:bg-accent">
                <FaFacebookF className="text-4xl text-light" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 col-span-2 md:col-span-2">
          <h3 className="font-bold border-b pb-2">MENU</h3>
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <Link to="/services" className="hover:text-accent">
            Services
          </Link>
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-5 col-span-6 md:col-span-2">
          <h3 className="font-bold border-b pb-2">HOURS</h3>
          <div className="grid grid-cols-3 gap-5">
            <p>Monday</p>
            <p className="col-span-2">8 am - 5 pm</p>
            <p>Tuesday</p>
            <p className="col-span-2">8 am - 5 pm</p>
            <p>Wednesday</p>
            <p className="col-span-2">8 am - 5 pm</p>
            <p>Thursday</p>
            <p className="col-span-2">8 am - 5 pm</p>
            <p>Friday</p>
            <p className="col-span-2">8 am - 5 pm</p>
            <p>Saturday</p>
            <p className="col-span-2">8 am - 5 pm</p>
            <p>Sunday</p>
            <p className="col-span-2">Closed</p>
          </div>
        </div>
        {/* <div className="col-span-full flex flex-row items-center justify-center pt-20">
          <Icon />
          <BlurText
            text="© 2025 Garcia Auto Detailing"
            delay={5}
            animateBy="words"
            direction="bottom"
            className="ml-5 font-bold text-[6.8svw]"
          />
        </div> */}
      </div>
      <ScrollVelocity
          texts={["© 2025 Garcia Auto Detailing","Garcia Auto Detailing © 2025 "]}
          velocity={5}
          className="custom-scroll-text pb-2"
        />
    </div>
    
  );
};

export default Footer;
