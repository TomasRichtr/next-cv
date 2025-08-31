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
      className="mt-10 text-center"
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
