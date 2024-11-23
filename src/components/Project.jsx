import { FaGithubAlt } from "react-icons/fa";

import Button from "./Button";
import Reveal from "./Reveal";

function Project({ project, toggleOpenStyle }) {
  return (
    <div className={`${toggleOpenStyle}`}>
      <Reveal width="w-full">
        <a href={project.repoLink} target="_blank" className="group">
          <div className="relative flex aspect-[16/9] justify-center overflow-hidden group-hover:cursor-pointer">
            <div className="projectBg -z-10 rounded-lg"></div>
            <span className="absolute top-3 text-lg font-semibold tracking-wide">
              {project.title}
            </span>
            <img
              className="absolute -bottom-6 z-10 w-11/12 rounded-lg object-cover transition duration-300 group-hover:rotate-3 group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />
          </div>
        </a>
      </Reveal>

      <Reveal width="w-full">
        <div className="mt-3 flex h-12 items-center justify-between gap-2">
          <span className="line-clamp-1 leading-6 sm:leading-7">
            {project.description}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.repoLink}
              target="_blank"
              className="focus:outline-none [&_svg]:focus:fill-secondary-500"
            >
              <FaGithubAlt className="size-7 fill-stone-100 transition-colors hover:fill-secondary-500" />
            </a>
            {project.liveLink ? (
              <Button href={project.liveLink}>LIVE</Button>
            ) : (
              <Button type="na">N/A</Button>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Project;
