import Project from "./Project";
import SectionLink from "./SectionLink";

const PROJECTS = [
  {
    title: "Comfy Store",
    link: "https://ronjacobdinero15.github.io/comfy-store/",
    image: "/projects/comfy_store.png",
    description: "E-commerce store",
  },
  {
    title: "Fast React Pizza",
    link: "https://ronjacobdinero15.github.io/fast-react-pizza/",
    image: "/projects/fast_react_pizza.png",
    description: "Pizza store",
  },
];

function Projects() {
  return (
    <div id="projects" className="h-dvh scroll-mt-32">
      <div>
        <SectionLink title="projects" even={true} className="mb-3" />

        <div className="mx-auto grid max-w-7xl gap-y-10 lg:grid-cols-2 lg:gap-x-10">
          {PROJECTS.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
