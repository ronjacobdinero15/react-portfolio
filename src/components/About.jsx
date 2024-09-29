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

import SectionLink from "./SectionLink.jsx";

const TECHNOLOGIES = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "React",
    icon: <FaReact className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Redux/RTK",
    icon: <SiRedux className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "GitHub",
    icon: <FaGithubAlt className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Java",
    icon: <FaJava className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "styled-components",
    icon: (
      <SiStyledcomponents className="size-60 fill-base-400/50 lg:size-52" />
    ),
  },
  {
    name: "React Query",
    icon: <SiReactquery className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Supabase",
    icon: <RiSupabaseFill className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="size-60 fill-base-400/50 lg:size-52" />,
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql className="size-60 fill-base-400/50 lg:size-52" />,
  },
];

function About() {
  return (
    <div id="about" className="flex h-dvh w-full items-center">
      <div className="mx-auto max-w-6xl">
        <SectionLink title="about me" />

        <div className="grid gap-5 lg:grid-cols-2">
          <p className="first-letter leading-6 first-letter:float-left first-letter:mr-1 first-letter:rounded-sm first-letter:bg-secondary-500 first-letter:p-2 first-letter:text-2xl first-letter:font-bold sm:leading-7">
            Hello, I'm Ron Jacob or RJ in short. I am a self-taught and
            self-motivated developer in React.JS and I usually spent and enjoy
            my time learning from online resources and create projects on my own
            and compare them with others. I have experience with these
            technologies: Redux Toolkit, TanStack/React Query, Supabase,
            ReactJS, React Router, Tailwind CSS, JavaScript, HTML & CSS, Git,
            GitHub, Bootstrap, Java and PostgreSQL.
          </p>

          <div className="relative">
            <div className="mb-3 flex items-center gap-x-1">
              <HiOutlineCpuChip className="size-8 text-secondary-500" />
              <span className="text-xl font-semibold">Tech Stack</span>
            </div>

            <div className="flex flex-wrap gap-x-2 gap-y-5 sm:max-w-96 md:max-w-md">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.name} className="group">
                  <span className="absolute bottom-16 right-0 top-8 -z-10 hidden sm:group-hover:!block md:top-4 lg:top-10">
                    {tech.icon}
                  </span>

                  <span className="z-10 text-nowrap rounded-lg bg-base-400 px-4 py-2 text-center transition-colors sm:group-hover:bg-secondary-500 sm:group-hover:text-base-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
