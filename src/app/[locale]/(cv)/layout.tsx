import React, {
  ReactNode,
} from "react";

import CvButtons from "@/components/utils/cv-buttons";
import ScrollToSection from "@/components/utils/scroll-to-section";

interface CvLayoutProps {
    about: ReactNode;
    skills: ReactNode;
    experience: ReactNode;
    children: ReactNode;
}

const CvLayout = ({
  about, skills, experience, children,
}: CvLayoutProps) => {
  return (
    <>
      <ScrollToSection />
      <CvButtons />
      <section
        id="home"
      >
        {children}
      </section>

      <section
        id="about"
      >
        {about}
      </section>

      <section
        id="experience"
      >
        {experience}
      </section>

      <section
        id="skills"
      >
        {skills}
      </section>
    </>
  );
};

export default CvLayout;
