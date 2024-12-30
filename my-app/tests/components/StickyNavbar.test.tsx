import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import {StickyNavbar} from '../../components/StickyNavbar';

describe('StickyNavbar', () => {
  it('renders without crashing', () => {
    render(<StickyNavbar />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('toggles mobile menu visibility on hamburger button click', () => {
    render(<StickyNavbar />);
    const hamburgerButton = screen.getByRole('button');
    fireEvent.click(hamburgerButton);
    expect(screen.getByText('FR')).toBeVisible();
    fireEvent.click(hamburgerButton);
    expect(screen.queryByText('FR')).not.toBeVisible();
  });

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
    expect(screen.getByText('FR')).toBeInTheDocument();
    expect(screen.getByText('(514) 624-0229')).toBeInTheDocument();
  });
});