import { HiLink } from "react-icons/hi2";

function SectionLink({ title, even = false }) {
  const firstWord = title.split(" ")[0];

  return (
    <div
      className={`group mb-3 flex items-center gap-2 ${even ? "flex-row-reverse" : ""} ${firstWord === "contact" ? "flex-row-reverse justify-center [&_div:after]:pb-0 [&_div:after]:text-5xl [&_div]:text-5xl" : ""}`}
    >
      <div className="flex items-center space-x-[2px] text-nowrap text-2xl font-bold capitalize tracking-wide transition-colors after:pb-2 after:text-4xl after:text-secondary-500 after:content-['.'] group-hover:text-stone-50">
        {title}
      </div>

      {firstWord !== "contact" && (
        <>
          <a className="relative" href={`#${firstWord}`}>
            <HiLink className="size-5 cursor-pointer text-base-300 transition-colors hover:text-secondary-500 group-hover:visible sm:invisible" />
          </a>

          <div className="h-[1px] w-full rounded-full bg-secondary-500"></div>
        </>
      )}
    </div>
  );
}

export default SectionLink;
