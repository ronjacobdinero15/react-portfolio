import { FaGithubAlt } from "react-icons/fa";

function Project({ project, toggleOpenStyle }) {
  return (
    <div className={`${toggleOpenStyle} `}>
      <a href={project.repoLink} target="_blank" className="group">
        <div className="relative flex aspect-[16/9] justify-center overflow-hidden group-hover:cursor-pointer">
          <div className="projectBg -z-10 rounded-lg"></div>
          <span className="absolute top-5 text-lg font-semibold tracking-wide">
            {project.title}
          </span>
          <img
            className="absolute -bottom-6 z-10 w-10/12 rounded-lg object-cover transition duration-300 group-hover:rotate-3 group-hover:scale-105"
            src={project.image}
            alt={project.title}
          />
        </div>
      </a>

      <div className="my-3 space-y-3">
        <div className="flex h-10 items-center justify-end gap-3">
          <a href={project.repoLink} target="_blank">
            <FaGithubAlt className="size-7 scale-105 fill-secondary-500 transition-all hover:scale-105 hover:fill-secondary-600" />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              className="bg-base-400 px-2 py-1 transition-all hover:scale-105"
              target="_blank"
            >
              LIVE
            </a>
          )}
        </div>

        <div className="line-clamp-2 text-sm">{project.description}</div>
      </div>
    </div>
  );
}

export default Project;
