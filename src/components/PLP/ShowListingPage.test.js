import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import ShowListingPage from "./ShowListingPage";
import {
  BrowserRouter
} from "react-router-dom";


jest.mock("../../network/Fetch", () => {
  return function MockedFetch({renderSuccess}) {
    const data = require('../../../data/movies.json');
    return renderSuccess({data});
  };
});

test('renders Show listing page without crashing', () => {
  const {container, getByText, getByAltText} = render(<BrowserRouter><ShowListingPage /></BrowserRouter>);

  expect(document.querySelector("a").getAttribute("href")).toBe("/detail/139");
  expect(getByText("Girls")).toBeInTheDocument();
  expect(getByText("Year: 2012-04-15")).toBeInTheDocument();
  expect(getByText("Rating: 6.7")).toBeInTheDocument()
  expect(getByAltText("139").getAttribute('src')).toBe("http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg");

  expect(document.querySelectorAll("a")).toHaveLength(10);
});


