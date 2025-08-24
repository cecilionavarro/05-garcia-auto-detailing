import { Link } from "react-router-dom";
import myLogo from "../assets/logo.png";
import CallButton from "./CallButton";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-2 w-full px-10 ">
      <div className="flex items-center relative h-20 ">
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
