import {
  ImageResponse,
} from "next/og";

import {
  APP_TITLE_SHORT,
} from "@/constants";

export const size = {
  width: 32,
  height: 32,
} as const;

export const contentType = "image/png";

const ICON_CONTAINER_STYLES = {
  fontSize: 22,
  background: "#000611FF",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#BDFF00FF",
} as const;

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={ICON_CONTAINER_STYLES}
      >
        {APP_TITLE_SHORT}
      </div>
    ),
    {
      ...size,
    },
  );
};

export default Icon;
