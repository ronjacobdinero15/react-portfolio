function Section({ sectionId, children, type = "primary" }) {
  const base = "flex w-full items-center";

  const styles = {
    primary: base + " h-dvh",
    experience: base + " mt-32 scroll-mt-32 h-auto",
    projects: base + " scroll-mt-32 h-auto",
    contact: base + " h-dvh scroll-mt-32",
  };

  return (
    <div id={sectionId} className={styles[type]}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
}

export default Section;
