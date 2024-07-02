import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LinesNumber from './LinesNumber';

describe('<LinesNumber />', () => {
  test('it should mount', () => {
    render(<LinesNumber />);

    const LinesNumber = screen.getByTestId('LinesNumber');

    expect(LinesNumber).toBeInTheDocument();
  });
});