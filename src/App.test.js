import { render, screen } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom'

import { Search } from './components/Search';
test('renders learn react link', () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows proper heading when rendered', () => {
  const {getByText} = render(Search, {onClick: ()=> {}})

  expect(getByText('Hello World!')).toBeInTheDocument()
})