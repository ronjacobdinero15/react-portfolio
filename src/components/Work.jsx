import { useState } from "react";

import Skill from "./Skill";

function Work({ exp }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="">
      <div className="grid gap-5 sm:grid-cols-[100px_1fr]">
        <a
          href="https://www.linkedin.com/company/roc-ph/posts/?feedView=all"
          target="_blank"
          className="hidden sm:!inline"
        >
          <img
            src={exp.companyLogo}
            alt="company logo"
            className="rounded-full"
          />
        </a>
        <div className="flex">
          <div className="">
            <h1 className="text-xl font-semibold text-secondary-500">
              {exp.jobTitle}
            </h1>
            <p>
              {exp.companyName} · {exp.employmentType}
            </p>
            <p className="flex items-center text-stone-300">
              {exp.dateWorked} · {exp.workedLength}
            </p>
            <p
              className={`${showDescription ? "" : "line-clamp-3 md:line-clamp-none"} cursor-pointer text-sm`}
              onClick={() => setShowDescription((show) => !show)}
            >
              {exp.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2 grid sm:grid-cols-[100px_1fr]">
        <div className=""></div>
        <div className="flex flex-wrap gap-x-2 gap-y-2 sm:ml-5">
          {exp.skillsUsed.map((skill) => (
            <Skill skill={skill} key={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
