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
import Section from "./Section.jsx";
import Button from "./Button.jsx";
import Reveal from "./Reveal.jsx";

const createIcon = (IconComponent) => (
  <IconComponent className="size-52 fill-base-400/50 lg:size-52" />
);

const TECHNOLOGIES = [
  {
    name: "JavaScript",
    icon: createIcon(IoLogoJavascript),
  },
  {
    name: "HTML",
    icon: createIcon(FaHtml5),
  },
  {
    name: "CSS",
    icon: createIcon(FaCss3Alt),
  },
  {
    name: "React",
    icon: createIcon(FaReact),
  },
  {
    name: "Redux/RTK",
    icon: createIcon(SiRedux),
  },
  {
    name: "GitHub",
    icon: createIcon(FaGithubAlt),
  },
  {
    name: "Tailwind",
    icon: createIcon(RiTailwindCssFill),
  },
  {
    name: "Java",
    icon: createIcon(FaJava),
  },
  {
    name: "Figma",
    icon: createIcon(FaFigma),
  },
  {
    name: "styled-components",
    icon: createIcon(SiStyledcomponents),
  },
  {
    name: "React Query",
    icon: createIcon(SiReactquery),
  },
  {
    name: "Supabase",
    icon: createIcon(RiSupabaseFill),
  },
  {
    name: "React Router",
    icon: createIcon(SiReactrouter),
  },
  {
    name: "Git",
    icon: createIcon(FaGitAlt),
  },
  {
    name: "Bootstrap",
    icon: createIcon(FaBootstrap),
  },
  {
    name: "Postgres",
    icon: createIcon(BiLogoPostgresql),
  },
];

function About() {
  return (
    <Section sectionId="about">
      <SectionLink title="about me" />

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <p className="first-letter leading-6 first-letter:float-left first-letter:mr-1 first-letter:rounded-sm first-letter:bg-secondary-500 first-letter:p-2 first-letter:text-2xl first-letter:font-bold sm:leading-7">
            Hello, I'm Ron Jacob or RJ in short. I am a self-taught and
            self-motivated developer in React.JS and I usually spent and enjoy
            my time learning from online resources and create projects on my own
            and compare them with others. I have experience with these
            technologies: Redux Toolkit, TanStack/React Query, Supabase,
            ReactJS, React Router, Tailwind CSS, JavaScript, HTML & CSS, Git,
            GitHub, Bootstrap, Java and PostgreSQL.
          </p>
        </Reveal>

        <div className="relative">
          <Reveal>
            <div className="mb-3 flex items-center gap-x-1">
              <HiOutlineCpuChip className="size-8 text-secondary-500" />
              <span className="text-xl font-semibold">Tech Stack</span>
            </div>
          </Reveal>

          <Reveal width="w-full">
            <div className="flex flex-wrap gap-x-2 gap-y-5 py-2 sm:max-w-96 md:max-w-md">
              {TECHNOLOGIES.map((tech) => (
                <div key={tech.name} className="group">
                  <span className="absolute bottom-16 right-0 top-4 -z-10 hidden sm:group-hover:!block md:top-0">
                    {tech.icon}
                  </span>
                  <Button>{tech.name}</Button>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default About;
