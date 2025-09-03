interface HomeContentProps {
  roleText: string;
  statusText: string;
}

const HomeContent = ({
  roleText,
  statusText,
}: HomeContentProps) => {
  return (
    <div
      className="text-center h-[50vh] absolute bottom-0 flex flex-col justify-center items-center"
    >
      <h2>
        {roleText}
      </h2>
      <p
        className="text-secondary mt-2"
      >
        {statusText}
      </p>
    </div>
  );
};

export default HomeContent;
