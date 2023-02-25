import React from "react";
import { Content, TitleText, WaveContainer } from "./styles";
import { Loading } from "@layout/components/atoms";

const WelcomeScreen = () => {
  return (
    <WaveContainer source={require("../../../../../assets/images/splash.png")}>
      <Content>
        <TitleText>Welcome to Doggo</TitleText>
        <Loading size="large" />
      </Content>
    </WaveContainer>
  );
};

export default WelcomeScreen;
