import classes from "./loader.module.css";

interface LoaderProps {
  text?: string;
}

const Loader = ({
  text,
}: LoaderProps) => {
  return (
    <div
      className={classes.container}
    >
      <div
        className={classes.loader}
      >
        <span
          className={classes.dot}
        >
          .
        </span>
        <span
          className={classes.dot}
        >
          .
        </span>
        <span
          className={classes.dot}
        >
          .
        </span>
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
