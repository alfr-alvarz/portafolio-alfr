
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FormationSection } from './FormationSection';


vi.mock('components/molecules/GlassCard', () => ({
  GlassCard: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  ),
}));

const formationData = [
  {
    title: 'Ingeniería en Informática',
    institution: 'Duoc UC',
    date: 'Presente',
  },
  {
    title: 'Certificación Python Básico',
    institution: 'OpenEDG Python Institute',
    date: '2024',
  },
  {
    title: 'Medicina Veterinaria',
    institution: 'Pontificia Universidad Católica',
    date: '2022 - 2023',
  },
];

describe('FormationSection', () => {
  it('debe renderizar el título "Formación" en el GlassCard', () => {
    render(<FormationSection />);
    expect(screen.getByRole('heading', { name: /Formación/i })).toBeInTheDocument();
  });

  it('debe renderizar todos los items de formación', () => {
    render(<FormationSection />);

    for (const item of formationData) {
      const title = screen.getByText(item.title);
      expect(title).toBeInTheDocument();
      
      const itemContainer = title.closest('div');
      expect(within(itemContainer!).getByText(item.institution)).toBeInTheDocument();
      expect(within(itemContainer!).getByText(item.date)).toBeInTheDocument();
    }
  });

  it('debe renderizar un icono para cada item', () => {
    render(<FormationSection />);
    
    const icons = document.querySelectorAll('svg');
    expect(icons.length).toBe(formationData.length);
  });
});