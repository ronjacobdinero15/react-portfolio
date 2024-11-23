import underline from "/underline.svg";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import Section from "./Section.jsx";

function Hero() {
  return (
    <Section sectionId="hero">
      <div className="flex flex-col gap-y-10 lg:flex-row-reverse xl:gap-x-10">
        <div className="hidden min-w-72 justify-center md:!flex">
          <Reveal>
            <img
              className="size-48 rounded-full object-cover object-bottom lg:size-56 xl:size-64"
              src="./me.jpg"
              alt=""
            />
          </Reveal>
        </div>

        <div className="flex flex-col gap-y-1 tracking-wide md:items-center lg:items-start lg:text-start">
          <Reveal>
            <p className="gradient-highlight xl:text-md font-semibold text-transparent">
              Hello World! I Am
            </p>
          </Reveal>

          <Reveal>
            <div className="font-bold xl:text-6xl [&_span]:text-5xl md:[&_span]:text-6xl">
              <span>Ron Jacob</span>
              <span className="hidden sm:inline"> Dinero</span>
              <span className="pl-[2px] text-4xl text-secondary-500">.</span>
            </div>
          </Reveal>

          <div className="max-w-md sm:max-w-lg lg:max-w-none">
            <Reveal>
              <p className="gradient-highlight text-5xl font-bold text-transparent md:text-center md:text-6xl lg:text-start">
                Aspiring Full-stack developer
              </p>
            </Reveal>
            <Reveal>
              <img
                className="inline-block"
                src={underline}
                alt="underline art"
              />
            </Reveal>
          </div>

          <Reveal>
            <p className="my-3 max-w-2xl text-sm leading-6 text-stone-300 sm:leading-7 md:text-center lg:mx-0 lg:text-start lg:text-base xl:mx-0 xl:text-start">
              I am currently @ my 4th year in college and soon to graduate
              student from the Philippines. I am mostly self-taught developer
              focusing on ReactJS and I really enjoy creating applications with
              it and constantly improving.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <Button type="contact" href="contact">
                <span className="text-md">Let's connect</span>
                <HiOutlineRocketLaunch className="size-6" />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
