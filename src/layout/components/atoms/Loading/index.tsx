import React from "react";
import { Spinner } from "./styles";

interface ILoadingProps {
  size?: "small" | "large";
}

const Loading = (
  { size }: ILoadingProps = {
    size: "large",
  }
) => {
  return <Spinner size={size} />;
};

export default Loading;
