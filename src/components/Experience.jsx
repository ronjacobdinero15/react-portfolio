import rocLogo from "/experience/roc.jfif";

import Work from "./Work";
import SectionLink from "./SectionLink";
import Section from "./Section";

const EXPERIENCE = [
  {
    companyName: "ROC.PH Digital Marketing Services",
    companyLogo: rocLogo,
    employmentType: "Internship",
    jobTitle: "Frontend Developer",
    dateWorked: "Jun 2024 - Jul 2024",
    workedLength: "2 mos",
    description:
      "Spent my college required internship mostly working on web design using Figma, and working on the company side-project to build appointment UI form and implement its functionality and finally, integrate the appointment submission event details with google calendar for both the client and the company for viewing upcoming events.",
    skillsUsed: [
      "Figma",
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Web Design",
      "Google Calendar API",
    ],
  },
];

function Experience() {
  return (
    <Section sectionId="experience" type="experience">
      <SectionLink title="experience" />

      <div className="space-y-5 divide-y">
        {EXPERIENCE.map((exp, i) => (
          <Work exp={exp} key={i} />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
