import React from 'react';
import { render, screen, fireEvent,within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { StickyNavbar } from '../../components/StickyNavbar';
;


expect.extend(require('@testing-library/jest-dom/matchers'));

describe('StickyNavbar', () => {
  it('renders without crashing', () => {
    render(<StickyNavbar />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
  // it('toggles mobile menu visibility on hamburger button click', () => {
  //   render(<StickyNavbar />);
  
  //   // Get the hamburger button
  //   const hamburgerButton = screen.getByRole('button', { name: 'Toggle navigation' });
  
  //   // Assert initial state: menu should not be visible
  //   const mobileMenu = screen.getByTestId('mobile-menu');
  //   expect(within(mobileMenu).queryByText('PRICING')).not.toBeVisible();
  
  //   // Open menu
  //   fireEvent.click(hamburgerButton);
  //   screen.debug();
  //   expect(within(mobileMenu).getByText('PRICING')).toBeVisible();
  
  //   // Close menu
  //   fireEvent.click(hamburgerButton);
  //   expect(within(mobileMenu).queryByText('PRICING')).not.toBeVisible();
  // });
  it('renders logo correctly', () => {
    render(<StickyNavbar />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '../assets/pneuspeedy-removebg-preview.png');
  });

  it('renders navigation links correctly', () => {
    render(<StickyNavbar />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('renders buttons correctly', () => {
    render(<StickyNavbar />);
    const buttons = screen.getAllByText('FR');
    expect(buttons.length).toBe(2); // Assert the number of matches
    buttons.forEach(button => expect(button).toBeInTheDocument());
  });
});