"use client";

import {
  Trans,
} from "react-i18next";

const AboutMeDescription = () => {
  return (
    <Trans
      i18nKey="about.description"
      components={{
        vue: <span
          className="font-semibold text-primary"
             />,
        react: <span
          className="font-semibold text-primary"
               />,
        typescript: <span
          className="font-semibold text-primary"
                    />,
        tailwind: <span
          className="font-semibold text-primary"
                  />,
      }}
    />
  );
};

export default AboutMeDescription;
