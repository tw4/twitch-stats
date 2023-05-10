import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import '@testing-library/jest-dom/extend-expect'; // important for expect
import { beforeEach } from '@jest/globals';

// this code allows us to emulate the useRoute() function
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

// this code runs and render navbar before every test
beforeEach(() => {
  render(<Navbar />);
});

test('is logo image visible', () => {
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});

test('is logo text visible', () => {
  const logoText = screen.getByText('Twitch Stats');
  expect(logoText).toBeInTheDocument();
});

test('is search input visible', () => {
  const searchInput = screen.getByPlaceholderText('Search');
  expect(searchInput).toBeInTheDocument();
});

test('is search button visible', () => {
  const searchButton = screen.getByRole('button', { name: 'search-button' });
  expect(searchButton).toBeInTheDocument();
});

test('is theme button visible', () => {
  const themeButton = screen.getByRole('button', { name: 'theme-button' });
  expect(themeButton).toBeInTheDocument();
});

test('theme-button control user click', () => {
  const themeButton = screen.getByRole('button', { name: 'theme-button' });
  fireEvent.click(themeButton);
  expect(localStorage.getItem('theme')).toEqual('dark');
});

test('search input expected value control', () => {
  const searchInput = screen.getByPlaceholderText('Search');
  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect(searchInput).toHaveValue('test');
});

test('search-button user click control', () => {
  const searchButton = screen.getByRole('button', { name: 'search-button' });
  const searchInput = screen.getByPlaceholderText('Search');

  fireEvent.click(searchButton);
  expect(searchInput).toHaveValue('');
});

test('if user click either logo or logo text go to home page', () => {
  const goToHomeElement = screen.getByRole('link', { name: 'go-to-home' });
  expect(goToHomeElement).toHaveAttribute('href', '/');
});
