import { render, screen } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom'

import { SearchPage } from './pages/SearchPage';
test('renders learn react link', () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});