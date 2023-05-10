import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import '@testing-library/jest-dom/extend-expect';
import { beforeEach } from '@jest/globals';

// this code runs and render navbar before every test
beforeEach(() => {
  render(<Navbar />);
});

test('is logo image visible', () => {
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});

test('logo text is visible', () => {
  const logoText = screen.getByText('Twitch Stats');
  expect(logoText).toBeInTheDocument();
});
