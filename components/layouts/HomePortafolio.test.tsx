import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import HomePortafolio from './HomePortafolio';

// Mock de todos los organismos hijos
vi.mock('components/organisms/Header', () => ({
  Header: () => <header data-testid="header-mock" />,
}));
vi.mock('components/organisms/WebFooter', () => ({
  WebFooter: () => <footer data-testid="web-footer-mock" />,
}));
vi.mock('components/organisms/BannerHome', () => ({
  default: () => <div data-testid="banner-home-mock" />,
}));
vi.mock('components/organisms/SkillsSection', () => ({
  SkillsSection: () => <div data-testid="skills-section-mock" />,
}));
vi.mock('components/organisms/UltimosProjectsSection', () => ({
  UltimosProjectsSection: () => <div data-testid="ultimos-projects-mock" />,
}));
vi.mock('components/organisms/FormationSection', () => ({
  FormationSection: () => <div data-testid="formation-section-mock" />,
}));

describe('HomePortafolio', () => {
  it('debe renderizar todos los organismos de la página principal', () => {
    render(
      <MemoryRouter>
        <HomePortafolio />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
    expect(screen.getByTestId('banner-home-mock')).toBeInTheDocument();
    expect(screen.getByTestId('skills-section-mock')).toBeInTheDocument();
    expect(screen.getByTestId('formation-section-mock')).toBeInTheDocument();
    expect(screen.getByTestId('ultimos-projects-mock')).toBeInTheDocument();
    expect(screen.getByTestId('web-footer-mock')).toBeInTheDocument();
  });
});