import { useEffect, useRef, useState } from "react";
import Link from "./Link";

function NavList() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSetActive(linkName) {
    setActive(linkName);
    setIsOpen(false);
  }

  return (
    <nav ref={navRef} className="relative">
      <div
        className={`hamburger sm:hidden [&_span]:bg-secondary-500 ${isOpen ? "open [&_span]:!bg-red-600" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={`w-28 gap-5 bg-base-500 tracking-wide transition-all sm:flex sm:w-auto sm:bg-transparent [&_li]:!mt-0 [&_li]:flex [&_li]:h-8 [&_li]:items-center [&_li]:rounded-lg ${isOpen ? "absolute right-1 top-10 w-32 space-y-2 rounded-lg border-[1px] border-base-300/95 p-1 sm:static sm:w-auto sm:space-y-0 sm:divide-y-0 sm:border-none sm:px-0 sm:py-0" : "hidden"}`}
      >
        {["about", "techstack", "projects", "contact"].map((linkName) => (
          <Link
            key={linkName}
            name={linkName}
            isActive={linkName === active}
            onClick={() => handleSetActive(linkName)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
