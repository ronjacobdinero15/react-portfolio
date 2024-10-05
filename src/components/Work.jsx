import { useState } from "react";

import Button from "./Button";
import Reveal from "./Reveal";

function Work({ exp }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div>
      <div className="grid sm:grid-cols-[100px_1fr] sm:gap-5">
        <Reveal>
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
        </Reveal>

        <div className="flex">
          <div className="space-y-[6px]">
            <Reveal>
              <p className="text-2xl font-semibold text-secondary-500">
                {exp.jobTitle}
              </p>
            </Reveal>

            <Reveal>
              <p>
                {exp.companyName} · {exp.employmentType}
              </p>
            </Reveal>

            <Reveal>
              <p className="flex items-center text-stone-300">
                {exp.dateWorked} · {exp.workedLength}
              </p>
            </Reveal>

            <Reveal>
              <p
                className={`${showDescription ? "" : "line-clamp-3 md:line-clamp-none"} cursor-pointer leading-6`}
                onClick={() => setShowDescription((show) => !show)}
              >
                {exp.description}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-2 grid sm:grid-cols-[100px_1fr]">
        <div className=""></div>
        <Reveal>
          <div className="flex flex-wrap gap-x-2 gap-y-2 sm:ml-5">
            {exp.skillsUsed.map((skill) => (
              <Button key={skill}>{skill}</Button>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Work;
