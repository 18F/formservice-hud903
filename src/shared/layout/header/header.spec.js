import React from 'react';
import renderer from 'react-test-renderer';
import Header from "./header";

describe('The App component', () => {
  it('renders as expected', () => {
    const tree = renderer
      .create(<Header/>)
      .toJSON();
      console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});