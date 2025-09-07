import SlideIn from "@/components/animators/slide-in";

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
        <SlideIn>
          {roleText}
        </SlideIn>
      </h2>
      <p
        className="text-secondary mt-2"
      >
        <SlideIn>
          {statusText}
        </SlideIn>
      </p>
    </div>
  );
};

export default HomeContent;
