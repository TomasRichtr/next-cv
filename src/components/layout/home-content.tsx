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
      <h5
        className="mt-4"
      >
        {statusText}
      </h5>
    </div>
  );
};

export default HomeContent;
