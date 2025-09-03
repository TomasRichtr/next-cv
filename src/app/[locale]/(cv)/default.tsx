import HomePage from "@/app/[locale]/(cv)/page";
import {
  AsyncParams,
} from "@/types";

const HomeDefault = ({
  params,
}: AsyncParams) => {
  return (
    <HomePage
      params={params}
    />
  );
};

export default HomeDefault;
