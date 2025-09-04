import React, {
  ReactNode,
} from "react";

import CvButton from "@/components/utils/cv-button";
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
      <CvButton />
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
