function Button({ children, role = "none", href }) {
  const base =
    "z-10 text-nowrap rounded-lg bg-base-400 sm:px-4 sm:py-2 px-3 py-[6px] text-center transition-colors sm:group-hover:bg-secondary-500 sm:group-hover:text-base-400";

  const styles = {
    none: base,
    link: base + " hover:bg-secondary-500",
  };

  if (role === "link") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[role]}
      >
        {children}
      </a>
    );
  }

  return (
    <span className={styles[role]} role={role}>
      {children}
    </span>
  );
}

export default Button;
