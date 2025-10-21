import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

// Mock de los componentes hijos
vi.mock('components/atoms/LogoHeader', () => ({
  LogoHeader: () => <div data-testid="logo-header-mock" />,
}));

vi.mock('components/atoms/BotonContacto', () => ({
  BotonContacto: () => <button data-testid="boton-contacto-mock" />,
}));

vi.mock('components/molecules/MenuHeader', () => ({
  MenuHeader: () => <div data-testid="menu-header-mock" />,
}));

describe('Header', () => {
  it('debe renderizar todos los componentes de la cabecera', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByTestId('logo-header-mock')).toBeInTheDocument();
    expect(screen.getByTestId('menu-header-mock')).toBeInTheDocument();
    expect(screen.getByTestId('boton-contacto-mock')).toBeInTheDocument();
  });
});