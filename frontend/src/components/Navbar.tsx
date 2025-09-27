import { Link } from "react-router-dom";
import myLogo from "../assets/garcias-auto-detailing-logo.png";
import CallButton from "./CallButton";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setVisible(
        currentScrollPosition < prevScrollPosition ||
          currentScrollPosition < 100
      );
      setPrevScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
  }, [prevScrollPosition]);

  return (
    <header
      className={`fixed top-0 z-10 w-full bg-dark rounded-b-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center py-5 md:items-center">
        <Link to="/" className="h-13 absolute left-10 hidden md:block">
          <img
            src={myLogo}
            alt="Garcia Auto Detailing"
            className="h-full w-auto object-contain"
          />
        </Link>
        <nav className="flex gap-5 py-2">
          <Link to="/" className="hover:text-accent text-light">
            HOME
          </Link>
          <Link to="/services" className="hover:text-accent text-light">
            SERVICES
          </Link>
          <Link to="/about" className="hover:text-accent text-light">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-accent text-light">
            CONTACT
          </Link>
        </nav>
        <div className="absolute right-10 hidden lg:block">
          <CallButton />
        </div>
      </div>
    </header>
  );
};
