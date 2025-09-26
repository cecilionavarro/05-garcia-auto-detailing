import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const location = useLocation();
  const navType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"
  const { pathname, hash } = location;

  useEffect(() => {
    // Let the browser handle back/forward scroll restoration
    if (navType === "POP") return;

    // If navigating to a hash on the page, scroll to that element smoothly
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // wait a tick so the target exists after render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }

    // Normal route change: smooth scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash, navType]);

  return null;
}
