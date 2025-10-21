import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BannerHome from './BannerHome';

vi.mock('components/molecules/AvatarBanner', () => ({
  default: () => <div data-testid="avatar-banner-mock" />,
}));

vi.mock('components/molecules/TextoBannerHome', () => ({
  default: () => <div data-testid="texto-banner-mock" />,
}));


vi.mock('components/molecules/GlassCard', () => ({
  GlassCard: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="glass-card-mock">{children}</div>
  ),
}));

describe('BannerHome', () => {
  it('debe renderizar el AvatarBanner', () => {
    render(<BannerHome />);
    expect(screen.getByTestId('avatar-banner-mock')).toBeInTheDocument();
  });

  it('debe renderizar TextoBannerHome dentro de un GlassCard', () => {
    render(<BannerHome />);
    
    const glassCard = screen.getByTestId('glass-card-mock');
    expect(glassCard).toBeInTheDocument();
    
    
    const textoBanner = screen.getByTestId('texto-banner-mock');
    expect(glassCard).toContainElement(textoBanner);
  });
});