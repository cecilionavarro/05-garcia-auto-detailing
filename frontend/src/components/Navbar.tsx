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
      setVisible(currentScrollPosition < prevScrollPosition || currentScrollPosition < 100)
      setPrevScrollPosition(currentScrollPosition)
    }
    window.addEventListener("scroll", handleScroll)
  }, [prevScrollPosition]);

  return (
    <header className={`fixed top-0 left-0 z-2 w-full px-10 bg-dark rounded-b-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center relative h-20 index-1">
          <Link to="/" className="h-13 absolute">
            <img
              src={myLogo}
              alt="Garcia Auto Detailing"
              className="h-full w-auto object-contain"
            />
          </Link>

          <nav className="flex gap-10 mx-auto">
            <Link to="/" className="hover:text-accent text-light">HOME</Link>
            <Link to="/services" className="hover:text-accent text-light">SERVICES</Link>
            <Link to="/about" className="hover:text-accent text-light">ABOUT</Link>
            <Link to="/contact" className="hover:text-accent text-light">CONTACT</Link>
          </nav>

          <div className="absolute right-0">
            <CallButton />
          </div>
      </div>
    </header>
  );
};
