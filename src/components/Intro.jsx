import underline from "/underline.svg";

import ConnectButton from "./ConnectButton.jsx";

function Intro() {
  return (
    <div className="flex h-dvh w-full items-center">
      <div className="mx-auto flex max-w-6xl flex-col gap-y-10 lg:flex-row-reverse xl:gap-x-10">
        <div className="hidden min-w-72 justify-center md:!flex">
          <img
            className="size-48 rounded-full object-cover object-bottom lg:size-56 xl:size-64"
            src="./me.jpg"
            alt=""
          />
        </div>

        <div className="flex max-w-3xl flex-col gap-y-1 tracking-wide md:items-center lg:items-start lg:text-start">
          <p className="gradient-highlight xl:text-md font-semibold text-transparent">
            Hello World! I Am
          </p>

          <div className="font-bold xl:text-6xl [&_span]:text-5xl md:[&_span]:text-6xl">
            <span>Ron Jacob</span>
            <span className="hidden sm:inline"> Dinero</span>
            <span className="pl-[2px] text-4xl text-secondary-500">.</span>
          </div>

          <div className="max-w-md sm:max-w-lg lg:max-w-none">
            <p className="gradient-highlight text-5xl font-bold text-transparent md:text-center md:text-6xl lg:text-start">
              Aspiring Full-stack developer
            </p>
            <img className="" src={underline} alt="underline art" />
          </div>

          <p className="my-3 max-w-2xl text-sm leading-6 text-stone-300 sm:leading-7 md:text-center lg:mx-0 lg:text-start lg:text-base xl:mx-0 xl:text-start">
            I am currently @ my 4th year in college and soon to graduate student
            from the Philippines. I am mostly self-taught developer focusing on
            ReactJS and I really enjoy creating applications with it and
            constantly improving.
          </p>

          <div>
            <ConnectButton show={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
