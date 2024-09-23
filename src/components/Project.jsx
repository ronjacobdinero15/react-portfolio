function Project({ project }) {
  return (
    <div className="">
      <div className="relative flex aspect-[16/9] cursor-pointer justify-center overflow-hidden">
        <div className="projectBg -z-10 rounded-lg"></div>
        <img
          className="absolute -bottom-10 z-10 w-11/12 rounded-lg object-cover"
          src={project.image}
          alt={project.title}
        />
        <span className="absolute top-5 text-lg font-semibold tracking-wide">
          {project.title}
        </span>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Project;
