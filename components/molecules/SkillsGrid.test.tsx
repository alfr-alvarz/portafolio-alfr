import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SkillsGrid } from './SkillsGrid';

// Mock de SkillItem para aislar el test a SkillsGrid
vi.mock('components/atoms/SkillItem', () => ({
  default: ({ label, icon }: { label: string; icon: React.ReactNode }) => (
    <div data-testid="skill-item" data-label={label}>
      {icon}
    </div>
  ),
}));

const skillsData = [
  { label: 'Python' },
  { label: 'React' },
  { label: 'SpringBoot' },
  { label: 'C++' },
  { label: 'Node.js' },
  { label: 'HTML5' },
  { label: 'CSS' },
  { label: 'MySQL' },
];

describe('SkillsGrid', () => {
  it('debe renderizar todos los SkillItems basados en skillsData', () => {
    render(<SkillsGrid />);

    const skillItems = screen.getAllByTestId('skill-item');
    expect(skillItems.length).toBe(skillsData.length);
  });

  it('debe pasar el label e icono correctos a cada SkillItem', () => {
    render(<SkillsGrid />);

    for (const skill of skillsData) {
      const skillItem = screen.getByTestId('skill-item', { 
        selector: `[data-label="${skill.label}"]` 
      });

      expect(skillItem).toBeInTheDocument();

      // Verifica que el icono (svg) esté dentro del item mockeado
      const icon = within(skillItem).querySelector('svg');
      expect(icon).toBeInTheDocument();
    }
  });
});