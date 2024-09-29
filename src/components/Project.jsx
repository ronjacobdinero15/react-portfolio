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

      <div className="mt-3 flex h-10 items-center justify-between gap-3">
        <span className="line-clamp-1 leading-6 sm:leading-7">
          {project.description}
        </span>

        <div className="flex items-center gap-3">
          <a href={project.repoLink} target="_blank">
            <FaGithubAlt className="size-7 fill-stone-100 transition-colors hover:fill-secondary-500" />
          </a>

          {project.liveLink ? (
            <a
              href={project.liveLink}
              className="rounded-lg bg-base-400 px-4 py-2 transition-colors hover:bg-secondary-500"
              target="_blank"
            >
              LIVE
            </a>
          ) : (
            <span className="py- rounded-lg bg-red-500 px-4 py-2 transition-colors hover:bg-red-600">
              N/A
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
