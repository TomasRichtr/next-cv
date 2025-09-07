import React, {
  ReactNode,
} from "react";

import CvButtons from "@/components/utils/cv-buttons";
import ScrollToSection from "@/components/utils/scroll-to-section";
import {
  Sections,
} from "@/constants/cv";

interface CvLayoutProps {
  about: ReactNode;
  skills: ReactNode;
  experiences: ReactNode;
  children: ReactNode;
}

const CvLayout = ({
  about, skills, experiences, children,
}: CvLayoutProps) => {
  return (
    <>
      <ScrollToSection />
      <CvButtons />
      <section
        id={Sections.Home}
      >
        {children}
      </section>

      <section
        id={Sections.About}
      >
        {about}
      </section>

      <section
        id={Sections.Experiences}
      >
        {experiences}
      </section>

      <section
        id={Sections.Skills}
      >
        {skills}
      </section>
    </>
  );
};

export default CvLayout;
