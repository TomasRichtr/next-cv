import {
  Colors, Styles,
} from "@/types/theme";

const getBtnColor = (color: Colors): string => {
  switch (color) {
  case Colors.Primary:
    return "btn-primary";
  case Colors.Secondary:
    return "btn-secondary";
  case Colors.Accent:
    return "btn-accent";
  case Colors.Info:
    return "btn-info";
  case Colors.Success:
    return "btn-success";
  case Colors.Warning:
    return "btn-warning";
  case Colors.Error:
    return "btn-error";
  default:
    return "btn-primary";
  }
};

const getBtnStyle = (style: Styles): string => {
  switch (style) {
  case Styles.Soft:
    return "btn-soft";
  case Styles.Text:
    return "btn-text";
  case Styles.Outline:
    return "btn-outline";
  case Styles.Gradient:
    return "btn-gradient";
  default:
    return "";
  }
};

export {
  getBtnColor, getBtnStyle,
};
