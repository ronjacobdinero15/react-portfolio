import { HiLink } from "react-icons/hi2";

function SectionLink({ title, even = false }) {
  return (
    <div
      className={`group mb-3 flex items-center gap-2 ${even ? "flex-row-reverse" : ""}`}
    >
      <div className="space-x-[2px] text-2xl font-bold capitalize tracking-wide transition-colors group-hover:text-stone-50">
        <span className="">{title}</span>
        <span className="text-4xl text-secondary-500">.</span>
      </div>

      <a className="relative" href={`#${title}`}>
        <HiLink className="size-5 cursor-pointer text-base-300 transition-colors hover:text-secondary-500 group-hover:visible sm:invisible" />
      </a>
      <div className="h-[1px] w-full bg-base-300"></div>
    </div>
  );
}

export default SectionLink;
