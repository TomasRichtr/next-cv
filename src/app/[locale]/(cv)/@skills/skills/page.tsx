import {
  values,
} from "lodash";

import PageWrapper from "@/components/layout/page-wrapper";
import {
  DEV_ICONS_MAP, SKILLS,
} from "@/constants/cv";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";

const SkillsPage = async ({
  params,
}: AsyncParams) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  const skills = values(SKILLS).map(s => {
    return {
      name: s,
      icon: DEV_ICONS_MAP[s],
    };
  });

  return (
    <PageWrapper
      title={t("skills.title")}
      description={t("skills.description")}
      className="pt-30"
    >
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-6 bg-base-200 rounded-xl hover:bg-base-300 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <i
              className={`${skill.icon} text-5xl mb-3 text-primary`}
            />
            <span
              className="text-sm font-medium text-center text-base-content"
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default SkillsPage;
