import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShowDetailMainImage from "./ShowDetailMainImage";
import showDetail from '../../../data/showDetail.json';


test('renders Show Detail main image  without crashing', () => {
  const {getByAltText} = render(<ShowDetailMainImage {...showDetail} />);

  expect(getByAltText("139").getAttribute('src')).toBe("http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg");
});


