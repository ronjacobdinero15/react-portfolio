function Link({ name, isActive, onClick }) {
  return (
    <li
      className={`hover:text-secondary-500 sm:hover:bg-transparent sm:hover:text-stone-100 ${isActive ? "active" : "bg-transparent"}`}
    >
      <a
        className={`link w-full px-2 uppercase transition duration-300 ease-in-out ${isActive ? "active" : ""}`}
        href={`#${name}`}
        onClick={onClick}
      >
        {name}
      </a>
    </li>
  );
}

export default Link;
