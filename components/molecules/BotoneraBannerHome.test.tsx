import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BotoneraBannerHome from './BotoneraBannerHome';

describe('BotoneraBannerHome', () => {
  it('debe renderizar el botón con el texto "Ir a Proyectos"', () => {
    render(<BotoneraBannerHome />);

    const button = screen.getByRole('button', { name: /ir a proyectos/i });
    expect(button).toBeInTheDocument();
  });

  it('debe renderizar la imagen de la flecha morada', () => {
    render(<BotoneraBannerHome />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    
    expect(image).toHaveAttribute('src', 'assets/img/flecha-morada.png');
    expect(image).toHaveAttribute('width', '30px');
  });
});