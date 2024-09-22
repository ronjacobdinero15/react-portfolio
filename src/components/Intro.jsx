import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Intro() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-y-10 lg:flex-row-reverse xl:gap-x-10">
        <div className="flex min-w-72 justify-center">
          <img
            className="object-s size-48 rounded-full object-cover object-bottom lg:size-56 xl:size-64"
            src="./me.jpg"
            alt=""
          />
        </div>

        <div className="flex max-w-3xl flex-col items-center text-center xl:items-start">
          <div className="gradient-highlight xl:text-md text-sm font-semibold text-transparent">
            Hello World and Devs! I Am
          </div>
          <div className="text-4xl font-bold xl:text-6xl">Ron Jacob Dinero</div>
          <div className="gradient-highlight text-4xl font-bold text-transparent xl:text-start xl:text-6xl">
            Aspiring Full-stack developer
          </div>
          <button
            onClick={() => window.open("/resume-main.pdf", "_blank")}
            className="resume my-5 flex items-center justify-center gap-x-2 rounded-lg bg-secondary-500 px-4 py-2 transition-all hover:scale-105 hover:bg-secondary-600"
          >
            <span className="text-stone-50">My Resume</span>
            <HiMiniArrowTopRightOnSquare className="size-6" />
          </button>
          <div className="mx-10 max-w-2xl text-center text-sm text-stone-300 xl:mx-0 xl:text-start">
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
