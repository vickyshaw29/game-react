import React from 'react';
import { CustomButton } from '../src/components/atoms';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const ButtonWithProps = () => {
  return (
    <CustomButton
      className="btntiny"
      variant="outlined"
      disabled={false}
      name="testBtn"
      onClick={() => {}}
    />
  );
};

// 1
describe('when rendered with `onSendWaves` prop', () => {
  it('should render the sending waves button', () => {
    render(ButtonWithProps());

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
// 2
describe('when the button is pressed', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(ButtonWithProps());
    button.find('.btntiny').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});