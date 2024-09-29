function Link({ name, isActive, onClick }) {
  return (
    <li
      className={`hover:text-secondary-500 md:hover:bg-transparent md:hover:text-stone-100 ${isActive ? "active" : "bg-transparent"}`}
    >
      <a
        className={`md:link text-md w-full py-[6px] pl-3 pr-4 uppercase !tracking-wide transition duration-300 ease-in-out md:px-2 md:py-0 ${isActive ? "active" : ""}`}
        href={`#${name}`}
        onClick={onClick}
      >
        {name}
      </a>
    </li>
  );
}

export default Link;
