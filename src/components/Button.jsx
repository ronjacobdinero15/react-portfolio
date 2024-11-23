function Button({ children, type = "primary", href, onClick }) {
  const base =
    "outlineStyle z-10 text-nowrap rounded-lg text-center transition-all flex items-center justify-center";

  const styles = {
    primary:
      base +
      " sm:group-hover:text-base-400 sm:group-hover:bg-secondary-500 hover:bg-secondary-500 bg-base-400 sm:px-4 sm:py-2 px-3 py-[6px]",
    contact:
      base +
      " contactBtn gap-x-2 bg-secondary-500 hover:bg-secondary-600 px-5 py-2 text-white focus:bg-secondary-600",
    projectToggle: base + " mx-auto my-5 px-2 pb-3 pt-5",
    na: "cursor-not-allowed rounded-lg bg-red-500 px-4 py-2 transition-colors hover:bg-red-600 focus:bg-red-600 focus:outline-none",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[type]}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
