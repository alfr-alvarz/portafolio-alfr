import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import ProyectosPortafolio from './ProyectosPortafolio';


vi.mock('components/organisms/Header', () => ({
  Header: () => <header data-testid="header-mock" />,
}));
vi.mock('components/organisms/WebFooter', () => ({
  WebFooter: () => <footer data-testid="web-footer-mock" />,
}));

describe('ProyectosPortafolio', () => {
  it('debe renderizar el Header, Footer y el contenido principal', () => {
    render(
      <MemoryRouter>
        <ProyectosPortafolio />
      </MemoryRouter>
    );

    expect(screen.getByTestId('header-mock')).toBeInTheDocument();
    expect(screen.getByTestId('web-footer-mock')).toBeInTheDocument();
    
    
  });
});