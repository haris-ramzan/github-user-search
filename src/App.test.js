import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom'

import { SearchPage } from './pages/SearchPage';
import { Search } from './components/Search';
import { Button } from './components/style';
test('renders SearchPage Title Text', () => {
  render(<SearchPage />);
  const textBy = screen.getByText(/Search GitHub User/);
  expect(textBy).toBeInTheDocument();
});
test('renders Button not to be disabled', () => {
  render(<Button />);
  expect(screen.getByRole('button')).not.toBeDisabled()
});
test('renders Button Text', () => {
  render(<Search />);
  fireEvent.click(screen.getByText('Search'))
});
test('clicking the button to move next page', () => {
  render(<Button onClick={()=> {history.push('/User')}} />);
})