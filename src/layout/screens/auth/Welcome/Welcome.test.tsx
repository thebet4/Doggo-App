import React from "react";
import renderer from "react-test-renderer";

import { WelcomeScreen } from "@layout/screens/auth";

it(`renders <Container /> correctly`, () => {
  const tree = renderer.create(<WelcomeScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
