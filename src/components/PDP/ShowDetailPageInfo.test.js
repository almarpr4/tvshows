import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShowDetailInfo from "./ShowDetailInfo";
import showDetail from '../../../data/showDetail.json';


test('renders Show Detail Info without crashing', () => {
  const { getByText, getByTestId, getByAltText} = render(<ShowDetailInfo {...showDetail} />);

  expect(getByText("Girls")).toBeInTheDocument();
  expect(getByText("Premiered: 2012-04-15")).toBeInTheDocument();
  expect(getByText("Rating: 6.7")).toBeInTheDocument()
  expect(getByText("This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.")).toBeInTheDocument()
  expect(getByText("Status: Ended")).toBeInTheDocument()
});


