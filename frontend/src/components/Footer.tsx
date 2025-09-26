import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";

const Footer = () => {
  return (
    <div className="grid grid-cols-5 px-10 py-20 gap-4">
      <div className="flex flex-col gap-4 col-span-3">
        <h3 className="font-bold border-b pb-2">INFORMATION</h3>
        <a href="tel:+15551234567" className="hover:text-accent">
          661 862 2372
        </a>
        <a href="mailto:garciadetails84@gmail.com" className="hover:text-accent">garciadetails84@gmail.com</a>
        <div className="ml-5 flex">
          <a
            href="https://www.linkedin.com/in/garcia-auto-detailing-6a8316323/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-5xl hover:text-accent"
            />
          </a>
          <a
            href="https://www.instagram.com/garcia.auto.detailing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-5xl hover:text-accent"
            />
          </a>
          <a
            href="https://nextdoor.com/pages/garcia-auto-detailing-bakersfield-ca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="text-5xl hover:text-accent"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
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
      <div className="flex flex-col gap-4">
        <h3 className="font-bold border-b pb-2">MENU</h3>
        <div className="grid grid-cols-[auto_auto] gap-x-10">
          <p>Monday</p>
          <p>6 am - 8 pm</p>
          <p>Tuesday</p>
          <p>6 am - 8 pm</p>
          <p>Wednesday</p>
          <p>6 am - 6 pm</p>
          <p>Thursday</p>
          <p>6 am - 6 pm</p>
          <p>Friday</p>
          <p>6 am - 6 pm</p>
          <p>Saturday</p>
          <p>6 am - 8 pm</p>
          <p>Sunday</p>
          <p>Closed</p>
        </div>
      </div>
      <div className="col-span-full flex flex-row items-center justify-center pt-20">
        <Icon />
        <h1 className="ml-5 font-bold text-[6.8svw]">
          &copy; 2025 Garcia Auto Detailing
        </h1>
      </div>
    </div>
  );
};

export default Footer;
