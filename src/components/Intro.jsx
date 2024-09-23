import underline from "/underline.svg";

import ConnectButton from "./ConnectButton.jsx";

function Intro() {
  return (
    <div className="-mt-5 flex h-screen items-center justify-center">
      <div className="flex flex-col gap-y-10 lg:flex-row-reverse xl:gap-x-10">
        <div className="flex min-w-72 justify-center">
          <img
            className="object-s size-48 rounded-full object-cover object-bottom lg:size-56 xl:size-64"
            src="./me.jpg"
            alt=""
          />
        </div>

        <div className="flex max-w-3xl flex-col items-center gap-y-1 text-center tracking-wide lg:items-start lg:text-start xl:items-start">
          <div className="gradient-highlight xl:text-md font-semibold text-transparent lg:text-base">
            Hello World! I Am
          </div>

          <div className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <span>Ron Jacob</span>
            <span className="hidden sm:inline"> Dinero</span>
            <span className="pl-[2px] text-4xl text-secondary-500">.</span>
          </div>

          <div className="gradient-highlight text-4xl font-bold text-transparent lg:text-5xl xl:text-start xl:text-6xl">
            Aspiring Full-stack developer
          </div>

          <img src={underline} alt="underline art" />

          <ConnectButton show={true} />

          <div className="max-w-2xl text-center text-sm leading-[22px] text-stone-300 sm:mx-10 lg:mx-0 lg:text-start lg:text-base xl:mx-0 xl:text-start">
            I am currently @ my 4th year in college and soon to graduate student
            from the Philippines. I am mostly self-taught developer focusing on
            ReactJS and I really enjoy creating applications with it and
            constantly improving.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
