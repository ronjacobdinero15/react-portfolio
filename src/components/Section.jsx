function Section({ sectionId, children, type = "primary" }) {
  const base = "flex w-full items-center h-dvh";

  const styles = {
    primary: base,
    experience: base + " mt-32 scroll-mt-32 !h-auto",
    projects: base + " !h-auto",
    contact: base + " scroll-mt-32",
  };

  return (
    <div id={sectionId} className={styles[type]}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}

export default Section;
