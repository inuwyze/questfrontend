import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import MyQuestTileBubble from '../components/MyQuestTileBubble';


describe('Testing MyQuestTileBubble', () => {
  it('contains to View children', () => {
    const tree = renderer.create(<MyQuestTileBubble 
      title={'string'}
      description={'string'}
      creator={'string'}
      completed={'boolean'}
    />).toJSON();
    // console.log(tree)
    expect(tree.children.length).toBe(2);

  });
  
  it('renders all the passed props as texts', () => {
    const {getAllByText}=render(<MyQuestTileBubble 
      title={'QuestTile tile'}
      description={'some description'}
      creator={'henry'}
      completed={true}
    />)
      // console.log(r)
    expect(getAllByText('QuestTile tile').length).toBe(1)
    getAllByText('some description')
    getAllByText('henry')
  });
  
  it('Tile Bubble renders correctly', () => {
    const tree = renderer.create(<MyQuestTileBubble />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});