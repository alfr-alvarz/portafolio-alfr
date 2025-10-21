import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import ExperienciaPortafolio from './ExperienciaPortafolio';


vi.mock('components/organisms/Header', () => ({
  Header: () => <header data-testid="header-mock" />,
}));
vi.mock('components/organisms/WebFooter', () => ({
  WebFooter: () => <footer data-testid="web-footer-mock" />,
}));

describe('ExperienciaPortafolio', () => {
  it('debe renderizar el Header, Footer y el contenido principal', () => {
    render(
      <MemoryRouter>
        <ExperienciaPortafolio />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
    expect(screen.getByTestId('web-footer-mock')).toBeInTheDocument();
    
  });
});