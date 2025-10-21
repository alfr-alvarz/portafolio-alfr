import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/react'; 
import { describe, it, expect } from 'vitest';
import SkillItem from './SkillItem';
import { BsCodeSlash } from 'react-icons/bs'; 

describe('SkillItem', () => {
  const mockProps = {
    label: 'React',
    icon: <BsCodeSlash data-testid="skill-icon" />, 
  };

  it('debe renderizar el icono', () => {

    render(<SkillItem {...mockProps} />);


    const icon = screen.getByTestId('skill-icon');
    expect(icon).toBeInTheDocument();
  });

  it('debe mostrar el tooltip con el label correcto al hacer hover', async () => {
    const user = userEvent.setup();
    render(<SkillItem {...mockProps} />);


    const iconContainer = screen.getByTestId('skill-icon').parentElement;
    if (iconContainer) {
      await user.hover(iconContainer);
    }
    const tooltipText = await screen.findByText('React');
    expect(tooltipText).toBeInTheDocument();
  });
});