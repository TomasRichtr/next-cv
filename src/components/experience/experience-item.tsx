import {
  Experience,
} from "@/constants/cv";

interface ExperienceItemProps {
  experience: Experience;
  t: (key: string) => string;
}

const ExperienceItem = ({
  experience,
  t,
}: ExperienceItemProps) => {
  return (
    <div
      className="timeline-end ms-2 m-3 w-full rounded-lg"
    >
      <div
        className="text-base-content pt-0.5 mb-3 font-medium text-lg"
      >
        {experience.position}
      </div>

      <div
        className="mb-2"
      >
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-focus font-medium"
        >
          {experience.place}
        </a>
      </div>

      <p
        className="mb-3 text-base-content/80 leading-relaxed"
      >
        {experience.description}
      </p>

      {experience.projects && experience.projects.length > 0 && (
        <div
          className="mb-4"
        >
          <p
            className="text-xs font-semibold text-base-content/90 mb-2 uppercase tracking-wide"
          >
            {t("experience.projects")}
            :
          </p>
          <ul
            className="space-y-3"
          >
            {experience.projects.map((project, index) => (
              <li
                key={index}
                className="flex items-start gap-2"
              >
                <span
                  className="badge badge-secondary size-2 rounded-full p-0 mt-2 flex-shrink-0"
                />
                <div
                  className="flex-1"
                >
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-focus font-medium text-sm block mb-1"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span
                      className="font-medium text-sm text-base-content block mb-1"
                    >
                      {project.name}
                    </span>
                  )}
                  <p
                    className="text-xs text-base-content/70 leading-relaxed"
                  >
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="flex flex-wrap gap-2"
      >
        {experience.skills.slice(0, 6).map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="badge badge-soft badge-secondary text-xs"
          >
            {skill}
          </span>
        ))}
        {experience.skills.length > 6 && (
          <span
            className="badge badge-soft badge-neutral text-xs"
          >
            +
            {experience.skills.length - 6}
            {" "}
            more
          </span>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
