import React from 'react';
import renderer from 'react-test-renderer';
import NumberToggle from '../components/numberToggle';
import { render, fireEvent } from '@testing-library/react-native';
describe('Functional Testing numberToggle', () => {
  const onMockPress=jest.fn()
  it('check if function is called', () => {
    
    const {getByText}=render(<NumberToggle
    number={5}
    setNumber={onMockPress}
    />)
    fireEvent.press(getByText('+'))
    expect(onMockPress).toHaveBeenCalled()
  });
  it('check if increased number is passed to setNumber', () => {
    const {getByText}=render(<NumberToggle
    number={5}
    setNumber={onMockPress}
    />)
    fireEvent.press(getByText('+'))
    expect(onMockPress).toHaveBeenCalledWith(6)
  });
  it('check if decreased number is passed to setNumber', () => {
    const {getByText}=render(<NumberToggle
    number={5}
    setNumber={onMockPress}
    />)
    fireEvent.press(getByText('-'))
    expect(onMockPress).toHaveBeenCalledWith(4)
  });
  it('NumberToggle renders correctly', () => {
    const tree = renderer.create(<NumberToggle 
        number={5}
        setNumber={onMockPress}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});