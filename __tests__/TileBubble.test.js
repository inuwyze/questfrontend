import React from 'react';
import {Text} from 'react-native'
import renderer from 'react-test-renderer';
import TileBubble from '../components/TileBubble';



describe('Testing TileBubble', () => {
  it('has null child when nothing is passed', () => {
    const tree = renderer.create(<TileBubble />).toJSON();
    // console.log(tree)
    expect(tree.children).toBe(null);
  });
  it('has child when nothing is passed', () => {
    const tree = renderer.create(<TileBubble >
        <Text>hello</Text>
        </TileBubble>
        ).toJSON();
    // console.log(tree)
    expect(tree.children.length).toBe(1);
  });
  it('Tile Bubble renders correctly', () => {
    const tree = renderer.create(<TileBubble />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});