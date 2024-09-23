import { HiOutlineRocketLaunch } from "react-icons/hi2";

function ConnectButton({ show = false }) {
  return (
    <button className={`${show ? "" : "hidden"} md:block`}>
      <a
        className="connectBtn my-5 flex items-center justify-center gap-x-2 rounded-lg bg-secondary-500 px-4 py-2 transition-all hover:scale-105 hover:bg-secondary-600"
        href="#connect"
      >
        <span>Let's connect</span>
        <HiOutlineRocketLaunch className="size-6" />
      </a>
    </button>
  );
}

export default ConnectButton;
