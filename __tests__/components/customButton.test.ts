import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { CustomButton } from '@/components/index';

describe('CustomButton Component', () => {
  // Test 1: Renders button with correct title
  it('Renders button with correct title', () => {
    const { getByText } = render(<CustomButton title="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  // Test 2: Executes handleClick function on click
  it('Executes handleClick function on click', () => {
    const mockHandleClick = jest.fn();
    const { getByText } = render(
      <CustomButton title="Click me" handleClick={mockHandleClick} />
    );

    fireEvent.click(getByText('Click me'));
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  // Test 3: Renders button with container styles
  it('Renders button with container styles', () => {
    const { container } = render(
      <CustomButton title="Click me" containerStyles="bg-blue-500 text-white" />
    );
    const button = container.querySelector('.custom-btn');
    expect(button).toHaveClass('bg-blue-500 text-white');
  });

  // Test 4: Renders button with text styles
  it('Renders button with text styles', () => {
    const { container } = render(
      <CustomButton title="Click me" textStyles="font-bold" />
    );
    const text = container.querySelector('.flex-1');
    expect(text).toHaveClass('font-bold');
  });

  // Test 5: Renders rightIcon when provided
  it('Renders rightIcon when provided', () => {
    const { container } = render(
      <CustomButton title="Click me" rightIcon="/path/to/icon.png" />
    );
    const icon = container.querySelector('img');
    expect(icon).toHaveAttribute('src', '/path/to/icon.png');
  });

  // Test 6: Renders button with default type when btnType not provided
  it('Renders button with default type when btnType not provided', () => {
    const { container } = render(<CustomButton title="Click me" />);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  // Test 7: Renders button with specified type when btnType provided
  it('Renders button with specified type when btnType provided', () => {
    const { container } = render(
      <CustomButton title="Click me" btnType="submit" />
    );
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});
