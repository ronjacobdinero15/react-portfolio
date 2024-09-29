import { useState } from "react";

import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

import Project from "./Project";
import SectionLink from "./SectionLink";

const PROJECTS = [
  {
    title: "Portfolio",
    repoLink: "https://github.com/ronjacobdinero15/react-portfolio",
    liveLink: "https://react-portfolio-gamma-lime.vercel.app/",
    image: "/projects/portfolio.png",
    description:
      "Portfolio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cumque repellat rerum ipsa numquam doloribus laborum, eum possimus obcaecati aspernatur temporibus magni! Beatae maxime error eveniet facilis nobis vero neque.",
  },
  {
    title: "Comfy Store",
    repoLink: "https://ronjacobdinero15.github.io/comfy-store/",
    liveLink: "https://ronjacobdinero15.github.io/comfy-store/",
    image: "/projects/comfy_store.png",
    description:
      "Clothing e-commerce store Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cumque repellat rerum ipsa numquam doloribus laborum, eum possimus obcaecati aspernatur temporibus magni! Beatae maxime error eveniet facilis nobis vero neque.",
  },
  {
    title: "Fast React Pizza",
    repoLink: "https://ronjacobdinero15.github.io/fast-react-pizza/",
    liveLink: "https://ronjacobdinero15.github.io/fast-react-pizza/",
    image: "/projects/fast_react_pizza.png",
    description: "React pizza store",
  },
  {
    title: "POS Java",
    repoLink: "https://github.com/ronjacobdinero15/point-of-sales-system-java",
    liveLink: "",
    image: "/projects/pos_java.png",
    description: "Point of sales system made in Java",
  },
  {
    title: "POS JavaScript",
    repoLink: "https://github.com/ronjacobdinero15/point-of-sale-system",
    liveLink: "https://ronjacobdinero15.github.io/point-of-sale-system/",
    image: "/projects/pos_javascript.png",
    description: "Point of sales system made in JavaScript",
  },
  {
    title: "PMS Java",
    repoLink:
      "https://github.com/ronjacobdinero15/payroll-management-system-java",
    liveLink: "",
    image: "/projects/pms_java.png",
    description: "Payroll management system made in Java",
  },
  {
    title: "Old Portfolio",
    repoLink: "https://github.com/ronjacobdinero15/portfolio",
    liveLink: "https://ronjacobdinero15.github.io/portfolio/",
    image: "/projects/old_portfolio.png",
    description: "My old portfolio using no libraries/frameworks",
  },
  {
    title: "Leaflet Note Taking App",
    repoLink: "https://github.com/ronjacobdinero15/leafletjs",
    liveLink: "https://ronjacobdinero15.github.io/leafletjs/",
    image: "/projects/leafletjs.png",
    description: "Practicing how to use leaflet",
  },
];

function Projects() {
  const [viewAllProjects, setViewAllProjects] = useState(false);
  const displayProjects =
    viewAllProjects === false ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <div id="projects" className="mb-32 flex w-full scroll-mt-32 items-center">
      <div className="mx-auto max-w-6xl">
        <SectionLink title="projects" even={true} className="mb-3" />

        <div className="grid gap-y-10 lg:grid-cols-2 lg:gap-x-10">
          {displayProjects.map((project, index) => (
            <Project
              key={index}
              project={project}
              toggleOpenStyle={`${index >= 2 && viewAllProjects === false ? "hidden md:!block" : ""}`}
            />
          ))}
        </div>
        <div className="my-10 flex justify-center">
          <button
            className={`${viewAllProjects ? "border-b-secondary-500 after:border-t-secondary-500 hover:!border-b-base-400 hover:after:!border-t-base-400" : ""} relative border-b-[20px] border-l-[50px] border-r-[50px] border-base-400 border-l-transparent border-r-transparent transition-all duration-200 after:absolute after:left-[-50px] after:top-[19px] after:border-l-[50px] after:border-r-[50px] after:border-t-[70px] after:border-base-400 after:border-l-transparent after:border-r-transparent after:transition-all after:duration-200 after:content-[''] hover:border-b-secondary-500 hover:after:border-t-secondary-500`}
            onClick={() => setViewAllProjects((toggle) => !toggle)}
          >
            <span className="absolute -left-6 top-5 z-20 text-5xl">
              {viewAllProjects ? <HiChevronUp /> : <HiChevronDown />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
