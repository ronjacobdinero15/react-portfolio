import logo from "/logo.svg";

import NavList from "./NavList";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-base-500/50 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[90%] items-center justify-between sm:max-w-[80%]">
        <a href="#" className="outlineStyle transition ease-out">
          <img
            className="size-10"
            src={logo}
            alt="ron jacob dinero portfolio logo"
          />
        </a>

        <NavList />
      </div>
    </header>
  );
}

export default Header;
