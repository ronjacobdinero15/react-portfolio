import { HiLink } from "react-icons/hi2";

function PageLink({ title }) {
  return (
    <div className="group flex items-center gap-2">
      <span className="capitalize transition-colors group-hover:text-stone-50">
        {title}
      </span>
      <a href={`#${title}`}>
        <HiLink className="hidden size-5 cursor-pointer text-base-300 group-hover:block" />
      </a>
    </div>
  );
}

export default PageLink;
