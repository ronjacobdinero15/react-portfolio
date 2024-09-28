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
    <div
      id="about"
      className="flex h-dvh scroll-mt-32 sm:h-screen sm:items-center"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLink title="about me" />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="leading-[22px] text-stone-300 first-letter:float-left first-letter:mr-1 first-letter:rounded-sm first-letter:bg-secondary-500 first-letter:p-2 first-letter:text-xl first-letter:font-bold">
            Hello, I'm Ron Jacob or RJ in short. I am a self-taught and
            self-motivated developer in React.JS and I usually spent and enjoy
            my time learning from online resources and create projects on my own
            and compare them with others. I have experience with these
            technologies: Redux Toolkit, TanStack/React Query, Supabase,
            ReactJS, React Router, Tailwind CSS, JavaScript, HTML & CSS, Git,
            GitHub, Bootstrap, Java and PostgreSQL.
          </div>

          <div className="relative">
            <div className="mb-3 flex items-center gap-x-1">
              <HiOutlineCpuChip className="size-8 text-secondary-500" />
              <span className="text-xl font-semibold">Tech Stack</span>
            </div>

            <div className="flex flex-wrap gap-x-2 gap-y-4 sm:max-w-96 md:max-w-md">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.name} className="group">
                  <span className="absolute bottom-16 right-0 top-8 -z-10 hidden sm:group-hover:!block md:top-4">
                    {tech.icon}
                  </span>

                  <span className="z-10 text-nowrap rounded-full bg-base-400 px-4 py-1 text-center transition-colors sm:group-hover:bg-secondary-500">
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
