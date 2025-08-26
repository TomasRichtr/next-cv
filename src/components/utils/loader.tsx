import classes from "./loader.module.css";

interface LoaderProps {
  text?: string;
  withMargin?: boolean;
  size?: number;
}

const Loader = ({
  text,
  size = 48,
}: LoaderProps) => {
  return (
    <div
      className={classes.container}
    >
      <div>
        <div
          className={classes.circle}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      </div>
      {text && (
        <p
          className={classes.text}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
