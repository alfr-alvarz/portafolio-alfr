import { Button, Space } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialLink {
    key: string;
    href: string;
    icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    key: 'github',
    href: 'https://github.com/alfr-alvarz', // Reemplaza con tu URL
    icon: <FaGithub />
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/alfredo-%C3%A1lvarez-r-253661357/', // Reemplaza con tu URL
    icon: <FaLinkedin />
  }
];

export const SocialLinks: React.FC = () => (
    <Space size={"middle"}>
        {socialLinks.map(link =>(
            <Button
                key={link.key}
                type="text"
                shape="circle"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                icon={link.icon}
                style={{
                    fontSize: "24px",
                    color: "rgba(255,255,255,0.85)"
                }}
            />
        ))}
    </Space>
);