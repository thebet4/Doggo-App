import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { fontScale } = Dimensions.get("window");

const Title = styled.Text`
  font-size: ${32 / fontScale}px;
  font-family: ${({ theme }) => theme.fontConfig.Inter[600].normal};
  color: ${({ theme }) => theme.colors.gray[100]};
`;

export default Title;
