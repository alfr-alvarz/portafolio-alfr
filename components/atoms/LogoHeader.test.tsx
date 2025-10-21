import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router'; 
import { LogoHeader } from './LogoHeader';

describe('LogoHeader', () => {
  
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  };

  it('debe renderizar el enlace (NavLink) correctamente', () => {
    renderWithRouter(<LogoHeader />);
    const link = screen.getByLabelText('Volver al inicio');
    expect(link).toBeInTheDocument();
  });

  it('debe apuntar a la ruta raíz "/"', () => {
    renderWithRouter(<LogoHeader />);
    const link = screen.getByLabelText('Volver al inicio');
    expect(link).toHaveAttribute('href', '/');
  });

  it('debe contener el icono (svg)', () => {
    
    const { container } = renderWithRouter(<LogoHeader />);
    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });
});