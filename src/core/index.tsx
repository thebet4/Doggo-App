import light from "@config/theme/light";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "@routes/index";
import { ThemeProvider } from "styled-components/native";

const Core = () => {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Core;
