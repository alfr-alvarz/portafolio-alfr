import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GlassCard } from './GlassCard';

describe('GlassCard', () => {
  it('debe renderizar el contenido (children) correctamente', () => {
    render(
      <GlassCard>
        <p>Contenido de prueba</p>
      </GlassCard>
    );

    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
  });

  it('debe aplicar los estilos "glass" al Card', () => {
    const { container } = render(<GlassCard />);

    const cardElement = container.querySelector('.ant-card');
    expect(cardElement).toHaveStyle({
      backgroundColor: 'rgba(26, 11, 36, 0.85)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    });
  });

  it('debe pasar props estándar de Ant Design, como "title"', () => {

    render(<GlassCard title="Título del Card" />);


    expect(screen.getByText('Título del Card')).toBeInTheDocument();
  });

  it('debe aplicar los estilos "glass" a la cabecera si tiene título', () => {

    const { container } = render(<GlassCard title="Título del Card" />);


    const headElement = container.querySelector('.ant-card-head');
    expect(headElement).toHaveStyle({
      color: 'rgba(255, 255, 255, 0.95)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    });
  });

  it('debe fusionar los estilos "style" pasados por props', () => {

    const { container } = render(<GlassCard style={{ margin: '20px' }} />);


    const cardElement = container.querySelector('.ant-card');
    
    expect(cardElement).toHaveStyle({
      backgroundColor: 'rgba(26, 11, 36, 0.85)',
    });

    expect(cardElement).toHaveStyle({
      margin: '20px',
    });
  });
});