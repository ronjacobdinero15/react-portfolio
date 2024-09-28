import { HiEnvelope } from "react-icons/hi2";
import SectionLink from "./SectionLink";

function Connect() {
  return (
    <div id="connect" className="h-dvh scroll-mt-32">
      <div className="mx-auto max-w-6xl">
        <div className="">
          <div className="text-center text-lg font-semibold text-secondary-500">
            Hit me up
          </div>

          <SectionLink title="contact me" />

          <a
            href="mailto:ronjacobdinero15@gmail.com"
            className="group flex items-center justify-center gap-2 text-xl"
          >
            <HiEnvelope className="size-10 transition-colors group-hover:fill-secondary-500" />
            <span className="pb-1 transition-colors group-hover:text-secondary-500">
              ronjacobdinero15@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;
