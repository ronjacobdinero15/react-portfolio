import { HiEnvelope } from "react-icons/hi2";
import SectionLink from "./SectionLink";
import Section from "./Section";
import Reveal from "./Reveal";

function Contact() {
  return (
    <Section sectionId="contact" type="contact">
      <Reveal width="w-full">
        <p className="text-center text-xl font-semibold text-secondary-500 sm:text-2xl xl:text-3xl">
          Hit me up
        </p>
      </Reveal>

      <Reveal width="w-full">
        <SectionLink title="contact me" />
      </Reveal>

      <Reveal width="w-full">
        <a
          href="mailto:ronjacobdinero15@gmail.com"
          className="group flex items-center justify-center gap-1 sm:gap-2 sm:text-xl"
        >
          <HiEnvelope className="size-7 transition-colors group-hover:fill-secondary-500 sm:size-10" />
          <span className="transition-colors group-hover:text-secondary-500">
            ronjacobdinero15@gmail.com
          </span>
        </a>
      </Reveal>
    </Section>
  );
}

export default Contact;
