import React from 'react';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
    render(<NewBoxForm />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('renders form fields', () => {
    const { getByText } = render(<NewBoxForm />);
    const addBoxButton = getByText('Add Box');
    const width = getByText('Width:');
    const height = getByText('Height:');
    const backgroundColor = getByText('Background Color:');

    expect(addBoxButton).toBeInTheDocument();
    expect(width).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(backgroundColor).toBeInTheDocument();
})