
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
      className="flex flex-col justify-center items-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[1000]"
    >
      <div>
        <div
          className="border-4 border-secondary-200 border-t-secondary-400 rounded-full animate-spin"
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      </div>
      {text && (
        <p
          className="text-xl font-medium m-0 tracking-wide text-secondary-400 animate-pulse"
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
