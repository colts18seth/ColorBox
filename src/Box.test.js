import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders without crashing', () => {
    render(<Box />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

it('renders "X" button', () => {
    const { getByText } = render(<Box />);
    const x = getByText('X');

    expect(x).toBeInTheDocument();
})