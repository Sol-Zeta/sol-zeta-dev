import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectTag from '.';

describe('<ProjectTag />', () => {
  test('it should mount', () => {
    render(<ProjectTag />);

    const ProjectTag = screen.getByTestId('ProjectTag');

    expect(ProjectTag).toBeInTheDocument();
  });
});