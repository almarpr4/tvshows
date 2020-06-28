import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import HeaderComponent from './HeaderComponent';

test('renders Header Component without crashing', () => {
  const { getByText, getByTestId } = render(<HeaderComponent />);
  const linkElement = getByText(/Show Catalog/i);
  const inputBox = getByTestId("form-text-search");
  expect(linkElement).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();
});


test("submits text to search for", () => {
  const onSubmit = jest.fn();
  const {getByTestId} = render(<HeaderComponent onhandleSearchClick={onSubmit}/>);
  fireEvent.submit(getByTestId("form-text-search"))

  expect(onSubmit).toHaveBeenCalled();
});
