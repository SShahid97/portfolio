import GWLogo from "../assets/img/gw_logo.png";
import NyurTech from "../assets/img/nyurTechLogo.png";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../data/static";

const Experience = () => {
  return (
    <>
      <SectionHeader sectionId="experience" title="Experience" />
      <section className="pb-20 md:pt:10  px-2 border-primary border-b-[1px]">
        <div className="max-w-[1000px]  mx-auto flex flex-col gap-y-4">
          <ExperienceCard
            cardIcon={NyurTech}
            link={experience[0].companyUrl}
            companyName={experience[0].companyName}
            address={experience[0].address}
            period={experience[0].period}
            role={experience[0].role}
            description={experience[0].description}
          />
          <ExperienceCard
            cardIcon={GWLogo}
            link={experience[1].companyUrl}
            companyName={experience[1].companyName}
            address={experience[1].address}
            period={experience[1].period}
            role={experience[1].role}
            description={experience[1].description}
          />
        </div>
      </section>
    </>
  );
};

export default Experience;
