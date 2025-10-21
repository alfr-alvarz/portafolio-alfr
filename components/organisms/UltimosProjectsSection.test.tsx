import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UltimosProjectsSection } from './UltimosProjectsSection';

vi.mock('components/molecules/GlassCard', () => ({
  GlassCard: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  ),
}));

vi.mock('components/molecules/ProjectItemCard', () => ({
  ProjectItemCard: ({ title }: { title: string }) => (
    <div data-testid="project-item-mock">{title}</div>
  ),
}));

const allProjects = [
  { title: 'App de Tienda de Mascotas', href: 'https://github.com/alfr-alvarz/proyecto-moviles' },
  { title: 'Tienda LevelUpGamer', href: 'https://github.com/alfr-alvarz/EV1TiendaLevelUpGamer' },
  { title: 'Lo Quieres, Lo Vendo', href: 'https://github.com/alfr-alvarz/actividad1.3.3-fullstack2' },
  { title: 'Sistema para Perfulandia', href: 'https://github.com/alfr-alvarz/perfulandia' },
];

describe('UltimosProjectsSection', () => {
  it('debe renderizar el título "Últimos Proyectos"', () => {
    render(<UltimosProjectsSection />);
    expect(screen.getByRole('heading', { name: /Últimos Proyectos/i })).toBeInTheDocument();
  });

  it('debe renderizar todos los ProjectItemCard', () => {
    render(<UltimosProjectsSection />);
    
    const items = screen.getAllByTestId('project-item-mock');
    expect(items.length).toBe(allProjects.length);
  });

  it('debe renderizar cada proyecto como un enlace con el href correcto', () => {
    render(<UltimosProjectsSection />);

    for (const project of allProjects) {
      
      const link = screen.getByText(project.title).closest('a');
      expect(link).toHaveAttribute('href', project.href);
      expect(link).toHaveAttribute('target', '_blank');
    }
  });

  it('debe renderizar el lema final', () => {
    render(<UltimosProjectsSection />);
    expect(screen.getByText(/"Commits constantes y sonantes."/i)).toBeInTheDocument();
  });
});