import { useEffect, useRef, useState } from "react";

import { HiOutlineRocketLaunch } from "react-icons/hi2";

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
    <nav
      ref={navRef}
      className="relative flex items-center gap-x-5 md:flex-row-reverse"
    >
      <button>
        <a
          className="connect my-5 flex items-center justify-center gap-x-2 rounded-lg bg-secondary-500 px-4 py-2 transition-all hover:scale-105 hover:bg-secondary-600"
          href="#contact"
        >
          <span>Let's connect</span>
          <HiOutlineRocketLaunch className="size-6" />
        </a>
      </button>

      <div
        className={`hamburger md:hidden [&_span]:bg-secondary-500 ${isOpen ? "open [&_span]:!bg-red-600" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={`w-28 !space-y-2 bg-base-500 tracking-wide transition-all md:flex md:w-auto md:gap-x-5 md:!space-y-0 md:bg-transparent [&_li]:!mt-0 [&_li]:flex [&_li]:h-8 [&_li]:items-center [&_li]:rounded-lg ${isOpen ? "absolute right-1 top-20 w-32 rounded-lg border-[1px] border-base-300/95 p-1 py-[6px] md:static md:w-auto md:space-y-0 md:divide-y-0 md:border-none" : "hidden"}`}
      >
        {["about", "experience", "projects"].map((linkName) => (
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
