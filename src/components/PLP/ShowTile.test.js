import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShowTile from "./ShowTile";
import showDetail from '../../../data/showDetail.json';
import {
  BrowserRouter
} from "react-router-dom";

test('renders Show tile without crashing', () => {
  const { getByText, getByTestId, getByAltText} = render(<BrowserRouter>><ShowTile {...showDetail} /></BrowserRouter>);

  expect(document.querySelector("a").getAttribute("href")).toBe("/detail/139");
  expect(getByText("Girls")).toBeInTheDocument();
  expect(getByText("Year: 2012-04-15")).toBeInTheDocument();
  expect(getByText("Rating: 6.7")).toBeInTheDocument()
  expect(getByAltText("139").getAttribute('src')).toBe("http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg");


});


