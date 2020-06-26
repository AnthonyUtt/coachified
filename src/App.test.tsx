import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/sign in/i)[0];
  expect(linkElement).toBeInTheDocument();
});
