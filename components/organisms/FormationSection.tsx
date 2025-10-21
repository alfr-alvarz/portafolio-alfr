import React from 'react';
import { Typography, Space, Flex } from 'antd';
import { GlassCard } from 'components/molecules/GlassCard';
import { IoSchool } from "react-icons/io5"; 
import { FaCode } from "react-icons/fa";    

const { Text } = Typography;

const activeIconColor = '#D100FF'; 
const pastIconColor = 'rgba(255, 255, 255, 0.65)';

const formationData = [
  {
    key: 'duoc',
    icon: <IoSchool style={{ color: activeIconColor, fontSize: '24px' }} />, 
    title: 'Ingeniería en Informática',
    institution: 'Duoc UC',
    date: 'Presente',
  },
  {
    key: 'python',
    icon: <FaCode style={{ color: pastIconColor, fontSize: '24px' }} />,
    title: 'Certificación Python Básico',
    institution: 'OpenEDG Python Institute', 
    date: '2024', 
  },
  {
    key: 'puc',
    icon: <IoSchool style={{ color: pastIconColor, fontSize: '24px' }} />,
    title: 'Medicina Veterinaria',
    institution: 'Pontificia Universidad Católica',
    date: '2022 - 2023',
  },
];

const styles: { [key: string]: React.CSSProperties } = {
  title: { 
    color: 'rgba(255, 255, 255, 0.95)', 
    fontSize: '16px', 
    display: 'block' 
  },
  institution: { 
    color: 'rgba(255, 255, 255, 0.85)', 
    display: 'block' 
  },
  date: { 
    color: 'rgba(255, 255, 255, 0.65)', 
    fontSize: '12px' 
  }
};

export const FormationSection: React.FC = () => {
  return (
    <GlassCard title="Formación">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {formationData.map(item => (
          <Flex key={item.key} gap="middle" align="start">
            <div style={{ paddingTop: '4px' }}>
              {item.icon}
            </div>
            <div>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <Text style={styles.institution}>
                {item.institution}
              </Text>
              <Text style={styles.date}>
                {item.date}
              </Text>
            </div>
          </Flex>
        ))}
      </Space>
    </GlassCard>
  );
};