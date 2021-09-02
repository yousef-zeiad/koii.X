import { fireEvent, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

import { Button } from '../Button';

describe('Button', () => {
  let ButtonWrapper: any;
  const onClick = jest.fn()
  beforeAll(() => {
    ButtonWrapper = create(<Button data-test-id={"hello"} onPress={onClick}>
      <span>Button</span>
    </Button>)
  })

  test('it should exist', () => {
    // make assertions on root
    expect(ButtonWrapper.toJSON()).toMatchSnapshot();
  })

  test('should fire onClick when clicked', () => {
    render(<Button onPress={onClick}>
      <span>Button</span>
    </Button>)
    const button = screen.getByText('Button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('should render in button container when loading is true', () => {
    create(
      <Button onPress={() => console.log('pressed')}>
        <span>Button</span>
      </Button>
    );
  });
})
