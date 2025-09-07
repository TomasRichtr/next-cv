import AboutMeDescription from "@/components/about/about-me-description";
import SlideIn from "@/components/animators/slide-in";
import SkillBadge from "@/components/experience/skill-badge";
import Card from "@/components/utils/card";
import {
  SKILLS,
} from "@/constants/cv";
import {
  Translate,
} from "@/types";

interface AboutMeCardProps {
  t: Translate
}

const AboutMeCard = ({
  t,
}: AboutMeCardProps) => {
  const skills = [
    SKILLS.JAVASCRIPT,
    SKILLS.TYPESCRIPT,
    SKILLS.VUE,
    SKILLS.NUXT,
    SKILLS.REACT,
    SKILLS.NEXT_JS,
  ];


  return (
    <Card
      className="w-full max-w-2xl"
    >
      <div
        className="p-6 space-y-4"
      >
        <h4
          className="text-2xl font-bold text-primary"
        >
          {t("about.title")}
        </h4>
        <div
          className="divider divider-primary"
        />
        <div
          className="text-base-content/90 leading-relaxed space-y-4"
        >
          <AboutMeDescription />
        </div>
        <div
          className="divider divider-primary"
        />
        <div
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, i) => (
            <SlideIn
              i={i}
              key={skill}
            >
              <SkillBadge
                skill={skill}
              />
            </SlideIn>

          ))}
        </div>
      </div>
    </Card>
  );
};

export default AboutMeCard;
