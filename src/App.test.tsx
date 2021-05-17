import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'


describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  })
});

