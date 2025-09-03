import {
  ReactNode,
} from "react";

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
        id="skills"
      >
        {skills}
      </section>

      <section
        id="experience"
      >
        {experience}
      </section>
    </>
  );
};

export default CvLayout;
