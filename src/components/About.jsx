import { BiLogoPostgresql } from "react-icons/bi";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithubAlt,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";

import SectionLink from "./SectionLink";

const TECHNOLOGIES = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "React",
    icon: <FaReact className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Redux/RTK",
    icon: <SiRedux className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "GitHub",
    icon: <FaGithubAlt className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Java",
    icon: <FaJava className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "styled-components",
    icon: (
      <SiStyledcomponents className="size-28 fill-base-400/50 lg:size-52" />
    ),
  },
  {
    name: "React Query",
    icon: <SiReactquery className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="size-28 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql className="size-28 fill-base-400/50 lg:size-52" />,
  },
];

function About() {
  return (
    <div id="about" className="h-[90vh] scroll-mt-32">
      <div>
        <SectionLink title="about" />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="leading-[22px] text-stone-300 first-letter:float-left first-letter:mr-1 first-letter:rounded-sm first-letter:bg-secondary-500 first-letter:p-2 first-letter:text-xl first-letter:font-bold">
            Hello, I'm Ron Jacob or RJ in short. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem asperiores repellat veritatis vero
            iure voluptatem sapiente hic voluptatum illum tempore exercitationem
            nihil pariatur est perferendis optio, provident ducimus excepturi
            dolorum.
          </div>

          <div className="">
            <div className="mb-3 flex items-center gap-x-1">
              <HiOutlineCpuChip className="size-8 text-secondary-500" />
              <span className="text-xl font-semibold">Tech Stack</span>
            </div>

            <div className="relative flex flex-wrap gap-x-2 gap-y-4">
              {TECHNOLOGIES.map((tech) => (
                <span key={tech.name} className="group">
                  <div className="absolute -top-20 right-0 -z-10 hidden group-hover:block">
                    {tech.icon}
                  </div>

                  <span className="z-10 text-nowrap rounded-full bg-base-400 px-4 py-1 text-center transition-colors hover:bg-secondary-500">
                    {tech.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
