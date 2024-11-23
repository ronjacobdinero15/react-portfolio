import { HiEnvelope } from "react-icons/hi2";

import Reveal from "./Reveal";
import Section from "./Section";
import SectionLink from "./SectionLink";
import circle_pattern from "./../../public/circle_pattern.png";

function Contact() {
  return (
    <Section sectionId="contact" type="contact">
      <div className="relative flex flex-col items-center">
        <Reveal>
          <p className="text-center text-xl font-semibold text-secondary-500 shadow-md sm:text-2xl xl:text-3xl">
            Hit me up
          </p>
        </Reveal>

        <Reveal>
          <SectionLink title="contact me" />
        </Reveal>

        <Reveal>
          <a
            href="mailto:ronjacobdinero15@gmail.com"
            className="outlineStyle group flex items-center justify-center gap-1 focus:px-3 sm:gap-2 sm:text-xl"
          >
            <HiEnvelope className="size-7 transition-colors group-hover:fill-secondary-500 sm:size-10" />
            <span className="shadow-md transition-colors group-hover:text-secondary-500">
              ronjacobdinero15@gmail.com
            </span>
          </a>
        </Reveal>

        <img
          src={circle_pattern}
          className="absolute left-1/2 top-1/2 -z-10 aspect-square max-w-[250px] -translate-x-1/2 -translate-y-1/2 opacity-75 sm:max-w-[320px] xl:max-w-[500px]"
          alt=""
        />
      </div>
    </Section>
  );
}

export default Contact;
