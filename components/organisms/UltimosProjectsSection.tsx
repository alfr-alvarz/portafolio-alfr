import React from 'react';
import { Row, Col, Space, Typography, Flex } from 'antd';
import { GlassCard } from 'components/molecules/GlassCard';
import { ProjectItemCard } from 'components/molecules/ProjectItemCard';

import { 
    FaDog,
  FaDatabase,
  FaCheckSquare,
  FaShoppingCart,  
  FaUserAlt
} from 'react-icons/fa';

const { Text, Paragraph } = Typography;

//Data de últimos proyectos

const column1Projects = [
  {
    key: 'p1',
    icon: <FaDog />, 
    title: 'App de Tienda de Mascotas',
    description: 'App móvil hecha en Kotlin enfocada en poder ver artículos para mascotas.',
    href: 'https://github.com/alfr-alvarz/proyecto-moviles',
  },
  {
    key: 'p2',
    icon: <FaShoppingCart />,
    title: 'Tienda LevelUpGamer',
    description: 'Sitio web de articulos gamer hecho con HTML5 y Javascript.',
    href: 'https://github.com/alfr-alvarz/EV1TiendaLevelUpGamer',
  },
];

const column2Projects = [
  {
    key: 'p3',
    icon: <FaShoppingCart />,
    title: 'Lo Quieres, Lo Vendo',
    description: 'Sitio de promoción para tienda. Hecho con HTML5, Bootstrap y Javascript.',
    href: 'https://github.com/alfr-alvarz/actividad1.3.3-fullstack2',
  },
  {
    key: 'p4',
    icon: <FaUserAlt />,
    title: 'Sistema para Perfulandia',
    description: 'Proyecto de API REST con SpringBoot y Maven. Enfoque de microservicios',
    href: 'https://github.com/alfr-alvarz/perfulandia',
  },
];

//Grilla de dos columnas usando GlassCard.
export const UltimosProjectsSection: React.FC = () => {
  return (
    <GlassCard title="Últimos Proyectos">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        
        
         <Row gutter={[24, 24]} align="stretch">
                    <Col xs={24} md={12}>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            {column1Projects.map(project => (
                                <a 
                                    href={project.href} 
                                    key={project.key} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                                >
                                    <ProjectItemCard 
                                        icon={project.icon}
                                        title={project.title}
                                        description={project.description}
                                    />
                                </a>
                            ))}
                        </Space>
                    </Col>
                    
                    <Col xs={24} md={12}>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            {column2Projects.map(project => (
                                <a 
                                    href={project.href} 
                                    key={project.key} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                                >
                                    <ProjectItemCard 
                                        icon={project.icon}
                                        title={project.title}
                                        description={project.description}
                                    />
                                </a>
                            ))}
                        </Space>
                    </Col>
                </Row>

        {/* Lema al final */}
        <Flex justify="center" style={{ width: '100%', marginTop: '16px' }}>
          <Paragraph 
            italic 
            style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              fontSize: '16px',
              margin: 0, // Resetear margen
            }}
          >
            "Commits constantes y sonantes."
          </Paragraph>
        </Flex>

      </Space>
    </GlassCard>
  );
};