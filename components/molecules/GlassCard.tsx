import React from 'react';
import { Card } from 'antd';
import type { CardProps } from 'antd'; // Importamos los tipos

export const GlassCard: React.FC<CardProps> = ({ 
  style, 
  headStyle, 
  ...rest 
}) => {


  const glassCardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(26, 11, 36, 0.85)', 
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    ...style, 
  };

  // Estilo para la cabecera (si tiene título)
  const glassHeadStyle: React.CSSProperties = {
    color: 'rgba(255, 255, 255, 0.95)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    ...headStyle,
  };

  return (
    <Card
      style={glassCardStyle}
      headStyle={glassHeadStyle}
      {...rest}
    />
  );
};