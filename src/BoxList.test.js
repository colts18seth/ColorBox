import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('renders without crashing', () => {
    render(<BoxList />);
});

test('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

test('adds box on submit', () => {
    const { getByTestId, getByText } = render(<BoxList />);
    const addBoxButton = getByText("Add Box");
    fireEvent.click(addBoxButton);
    const box = getByTestId("Box");
    expect(box).toBeInTheDocument();
});