import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  const { getByText } = render(<Header />);
  const headerTitle = getByText(/Players/i);
  const headerCaption = getByText(/manage users of your game/i);
  const button = getByText(/Add/i);

  expect(headerTitle).toBeInTheDocument();
  expect(headerCaption).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
