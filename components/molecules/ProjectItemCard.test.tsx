import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectItemCard } from './ProjectItemCard';
import { FaGithub } from 'react-icons/fa';

describe('ProjectItemCard', () => {
  const mockProps = {
    title: 'Proyecto de Prueba',
    description: 'Esta es una descripción de prueba.',
    icon: <FaGithub data-testid="project-icon" />,
    href: 'https://ejemplo.com',
  };

  it('debe renderizar el título, descripción e icono', () => {
    render(<ProjectItemCard {...mockProps} />);

    expect(screen.getByText('Proyecto de Prueba')).toBeInTheDocument();
    expect(screen.getByText('Esta es una descripción de prueba.')).toBeInTheDocument();
    expect(screen.getByTestId('project-icon')).toBeInTheDocument();
  });

  it('debe ser un enlace (<a>) con href y target correctos', () => {
    render(<ProjectItemCard {...mockProps} />);

    const cardLink = screen.getByRole('link');
    expect(cardLink).toBeInTheDocument();
    expect(cardLink).toHaveAttribute('href', 'https://ejemplo.com');
    expect(cardLink).toHaveAttribute('target', '_blank');
  });

  it('no debe ser un enlace si no se pasa href', () => {
    const propsWithoutHref = { ...mockProps, href: undefined };
    render(<ProjectItemCard {...propsWithoutHref} />);

    const card = screen.queryByRole('link');
    expect(card).not.toBeInTheDocument();
  });
});