import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AvatarBanner from './AvatarBanner';

describe('AvatarBanner', () => {
  it('debe renderizar el componente Avatar', () => {
    render(<AvatarBanner />);
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });

  it('debe tener el src correcto para la imagen', () => {
    render(<AvatarBanner />);


    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', 'assets/img/profile.gif');
  });

  it('debe aplicar los estilos custom (avatarStyle)', () => {
    render(<AvatarBanner />);
    const avatarContainer = screen.getByRole('img').parentElement;
    
    expect(avatarContainer).toHaveStyle({
      width: '50%',
      minWidth: '100px',
      boxShadow: '0 0 15px 4px rgba(200, 160, 255, 0.4)',
    });
  });
});