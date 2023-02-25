import React from "react";
import renderer from "react-test-renderer";

import { Loading } from "@layout/components/atoms";
import { ThemeProvider } from "styled-components/native";
import light from "@config/theme/light";

it(`renders <Loading /> correctly`, () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={light}>
        <Loading />
      </ThemeProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
