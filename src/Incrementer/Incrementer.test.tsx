import { createEvent, fireEvent, render, screen } from '@testing-library/react';
import { Incrementer } from './Incrementer';

test('increments on click', () => {
  render(<Incrementer increment={8}/>);
  let element = screen.getByText(/count is 0/i);
  expect(element).toBeInTheDocument();

  const button = screen.getByText(/Increment Count/i);
  const clickButtonEvent = createEvent.click(button);
  fireEvent(button, clickButtonEvent);

  element = screen.getByText(/count is 8/i);
  expect(element).toBeInTheDocument();
})