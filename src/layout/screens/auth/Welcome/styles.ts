import { Title } from "@layout/components/atoms/Typography";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const WaveContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Content = styled(SafeAreaView)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 64px;
`;

export const TitleText = styled(Title)`
  margin-bottom: 64px;
`;
