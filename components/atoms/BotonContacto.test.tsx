import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BotonContacto } from './BotonContacto';

describe('BotonContacto', () => {
  it('debe renderizar el botón con el texto "Contacto"', () => {

    render(<BotonContacto />);
    
    const button = screen.getByRole('button', { name: /contacto/i });
    expect(button).toBeInTheDocument();
  });
});