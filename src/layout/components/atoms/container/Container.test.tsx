import React from "react";
import renderer from "react-test-renderer";

import { Container } from "@layout/components/atoms";
import { Text } from "react-native";

it(`renders <Container /> correctly`, () => {
  const tree = renderer
    .create(
      <Container>
        <Text>Lorem ipsom</Text>
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
