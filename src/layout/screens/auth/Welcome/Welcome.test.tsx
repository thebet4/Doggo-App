import React from "react";
import renderer from "react-test-renderer";

import { WelcomeScreen } from "@layout/screens/auth";
import { ThemeProvider } from "styled-components/native";
import light from "@config/theme/light";

it(`renders <WelcomeScreen /> correctly`, () => {
  const navigation = {
    navigate: jest.fn(),
  };
  let route: any;
  const tree = renderer
    .create(
      <ThemeProvider theme={light}>
        <WelcomeScreen navigation={navigation as any} route={route} />
      </ThemeProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
