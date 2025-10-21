import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialLinks } from './SocialLinks';

describe('SocialLinks', () => {
  it('debe renderizar los enlaces sociales correctamente', () => {
    render(<SocialLinks />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it('debe tener los atributos href y target correctos', () => {
    render(<SocialLinks />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/alfr-alvarz');
    expect(githubLink).toHaveAttribute('target', '_blank');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/alfredo-%C3%A1lvarez-r-253661357/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  it('debe contener los iconos (svg)', () => {
    const { container } = render(<SocialLinks />);
    
    const svgIcons = container.querySelectorAll('svg');
    expect(svgIcons.length).toBeGreaterThanOrEqual(2); // Debe haber al menos 2 iconos
  });
});