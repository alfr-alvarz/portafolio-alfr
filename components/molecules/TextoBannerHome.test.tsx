import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TextoBannerHome from './TextoBannerHome';

describe('TextoBannerHome', () => {
  it('debe renderizar el título principal (nombre)', () => {
    render(<TextoBannerHome />);
    
    const title = screen.getByRole('heading', { level: 1, name: /Alfredo Álvarez/i });
    expect(title).toBeInTheDocument();
  });

  it('debe renderizar el subtítulo (rol)', () => {
    render(<TextoBannerHome />);
    
    const subtitle = screen.getByRole('heading', { level: 3, name: /Estudiante de Informática/i });
    expect(subtitle).toBeInTheDocument();
  });

  it('debe renderizar el párrafo de descripción', () => {
    render(<TextoBannerHome />);
    
    const paragraph = screen.getByText(/Estudiante de Informática apasionado por el desarrollo/i);
    expect(paragraph).toBeInTheDocument();
  });
});