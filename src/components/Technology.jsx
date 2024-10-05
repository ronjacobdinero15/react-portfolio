function Technology({ tech }) {
  return (
    <span className="z-10 text-nowrap rounded-full bg-base-400 px-4 py-1 text-center transition-colors sm:group-hover:bg-secondary-500">
      {tech.name}
    </span>
  );
}

export default Technology;
