import { useEffect, useRef, useState } from "react";

import NavLink from "./NavLink";

function NavList() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSectionInView, setActiveSectionInView] = useState(null);
  const navRef = useRef(null);
  const links = ["about", "projects", "experience"];

  useEffect(() => {
    function handleClickOutside(e) {
      if (!navRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observerCallback = (id) => (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionInView(id);
        } else if (activeSectionInView === id) {
          setActiveSectionInView(null);
        }
      });
    };

    const observeSection = (id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(observerCallback(id), {
        threshold: 0.5,
      });
      observer.observe(element);
      return () => observer.disconnect();
    };

    const observersCleanup = links.map((id) => observeSection(id));

    return () => observersCleanup.forEach((cleanup) => cleanup && cleanup());
  }, [activeSectionInView, links]);

  return (
    <nav ref={navRef} className="relative flex items-center gap-x-5">
      <div
        className={`hamburger md:hidden [&_span]:bg-secondary-500 ${isOpen ? "open [&_span]:!bg-red-600" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul
        className={`w-36 !space-y-2 bg-base-500 transition-all md:flex md:w-auto md:gap-x-5 md:!space-y-0 md:bg-transparent [&_li]:!mt-0 [&_li]:flex [&_li]:h-8 [&_li]:items-center [&_li]:rounded-lg ${isOpen ? "absolute right-1 top-10 w-32 rounded-lg border-[1px] border-base-300/95 p-1 py-2 md:w-auto md:space-y-0 md:divide-y-0 md:border-none" : "hidden md:!flex"}`}
      >
        {links.map((linkName) => (
          <NavLink
            key={linkName}
            name={linkName}
            isActive={linkName === activeSectionInView}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavList;
