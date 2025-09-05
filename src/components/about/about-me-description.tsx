"use client";

import dayjs from "dayjs";
import {
  last,
} from "lodash";
import {
  Trans,
} from "react-i18next";

import {
  EXPERIENCES,
} from "@/constants/cv";

const AboutMeDescription = () => {
  const years = Math.ceil(dayjs().diff(last(EXPERIENCES)!.startDate, "year", true));

  return (
    <Trans
      i18nKey="about.description"
      values={{
        years,
      }}
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
