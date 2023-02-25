import React, { useEffect } from "react";
import { Content, TitleText, WaveContainer } from "./styles";
import { Loading } from "@layout/components/atoms";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamsList } from "@routes/Auth";

const WelcomeScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamsList, "WelcomeScreen">) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 3000);
  }, []);

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
