import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router';
import { MenuHeader } from './MenuHeader';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('MenuHeader', () => {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experiencia', label: 'Historia y Experiencia' },
    { href: '/proyectos', label: 'Proyectos' },
  ];

  it('debe renderizar todos los enlaces de navegación', () => {
    renderWithRouter(<MenuHeader />);

    for (const link of navLinks) {
      const navLink = screen.getByRole('link', { name: link.label });
      expect(navLink).toBeInTheDocument();
    }
  });

  it('debe asignar los href correctos a cada enlace', () => {

    renderWithRouter(<MenuHeader />);

    for (const link of navLinks) {
      const navLink = screen.getByRole('link', { name: link.label });
      expect(navLink).toHaveAttribute('href', link.href);
    }
  });
});