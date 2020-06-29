import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import ShowDetailPage from "./ShowDetailPage";
import {
  BrowserRouter
} from "react-router-dom";


jest.mock("../../network/Fetch", () => {
  return function MockedFetch({renderSuccess}) {
    const data = require('../../../data/showDetail.json');
    return renderSuccess({data});
  };
});

test('renders Show detail page without crashing', () => {
  const {getByText, getByAltText} = render(<BrowserRouter><ShowDetailPage /></BrowserRouter>);

  expect(getByText("Girls")).toBeInTheDocument();
  expect(getByText("Premiered: 2012-04-15")).toBeInTheDocument();
  expect(getByText("Rating: 6.7")).toBeInTheDocument()
  expect(getByAltText("139").getAttribute('src')).toBe("http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg");
  expect(getByText("This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.")).toBeInTheDocument()


});


