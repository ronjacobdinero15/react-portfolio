import { HiOutlineRocketLaunch } from "react-icons/hi2";

function ContactButton({ show = false }) {
  return (
    <button className={`${show ? "" : "hidden"} md:block`}>
      <a
        className="contactBtn flex items-center justify-center gap-x-2 rounded-lg bg-secondary-500 !px-5 !py-2 transition-all hover:bg-secondary-600"
        href="#contact"
      >
        <span className="text-md">Let's connect</span>
        <HiOutlineRocketLaunch className="size-6" />
      </a>
    </button>
  );
}

export default ContactButton;
