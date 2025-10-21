import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SkillsSection } from './SkillsSection';

vi.mock('components/molecules/GlassCard', () => ({
  GlassCard: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div data-testid="glass-card-mock">
      <h3>{title}</h3>
      {children}
    </div>
  ),
}));

vi.mock('components/molecules/SkillsGrid', () => ({
  SkillsGrid: () => <div data-testid="skills-grid-mock" />,
}));

describe('SkillsSection', () => {
  it('debe renderizar SkillsGrid dentro de GlassCard', () => {
    render(<SkillsSection />);

    const glassCard = screen.getByTestId('glass-card-mock');
    expect(glassCard).toBeInTheDocument();

    const skillsGrid = within(glassCard).getByTestId('skills-grid-mock');
    expect(skillsGrid).toBeInTheDocument();
  });

  it('debe pasar el título "Mis Habilidades" al GlassCard', () => {
    render(<SkillsSection />);
    
    const title = screen.getByRole('heading', { name: /Mis Habilidades/i });
    expect(title).toBeInTheDocument();
  });
});