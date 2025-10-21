import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WebFooter } from './WebFooter';

vi.mock('components/molecules/SocialLinks', () => ({
  SocialLinks: () => <div data-testid="social-links-mock" />,
}));

describe('WebFooter', () => {
  it('debe renderizar el componente SocialLinks', () => {
    render(<WebFooter />);
    expect(screen.getByTestId('social-links-mock')).toBeInTheDocument();
  });

  it('debe renderizar el texto de copyright con el año actual', () => {
    render(<WebFooter />);
    
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} Alfredo Álvarez.`);
    
    expect(copyrightText).toBeInTheDocument();
  });
});