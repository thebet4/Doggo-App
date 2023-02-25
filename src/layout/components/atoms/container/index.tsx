import React, { ReactElement } from "react";
import { SafeArea } from "./styles";
import { StatusBar } from "expo-status-bar";

type ContainerProps = {
  children: ReactElement;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <SafeArea>
      <StatusBar style="dark" />
      {children}
    </SafeArea>
  );
};
export default Container;
