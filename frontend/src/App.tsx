import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Services } from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import GradualBlur from "./components/ui/GradualBlur";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <GradualBlur
        target="page"
        position="bottom"
        height="7rem"
        strength={1}
        divCount={1}
        curve="bezier"
        exponential
        opacity={1}
      />
    </BrowserRouter>
  );
}

export default App;
