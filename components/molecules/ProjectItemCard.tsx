import React from "react";
import { Card, Avatar, Typography } from 'antd';

const { Text } = Typography;

interface ProjectItemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string; // Opcional, en caso de que el Card no tenga link
}


const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)', 
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  avatar: { 
    backgroundColor: 'rgba(255, 255, 255, 0.05)' 
  },
  title: { 
    color: 'rgba(255, 255, 255, 0.95)' 
  },
  description: { 
    color: 'rgba(255, 255, 255, 0.65)' 
  }
};

// Esta tarjeta va dentro del GlassCard.
export const ProjectItemCard: React.FC<ProjectItemCardProps> = ({
  icon,
  title,
  description,
  href,
}) => {
  
  
  const cardProps = {
    hoverable: true,
    style: styles.card,
    bordered: false,
    href: href, 
    target: href ? '_blank' : undefined, 
  };

  
  return (
    <Card {...cardProps}>
      <Card.Meta
        avatar={
          <Avatar 
            shape="square" 
            size="large" 
            icon={icon} 
            style={styles.avatar} 
          />
        }
        title={<Text style={styles.title}>{title}</Text>} 
        description={<Text style={styles.description}>{description}</Text>} 
      />
    </Card>
  );
};