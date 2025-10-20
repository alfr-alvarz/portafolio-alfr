import React from "react";
import { Layout, Flex, Typography } from "antd"; // No necesitas Space y Button aquí
import { SocialLinks } from "components/molecules/SocialLinks";

const { Footer } = Layout;
const { Text } = Typography;

export const WebFooter: React.FC = () => {
    return (
        <Footer 
            className="w-full max-w-4xl px-5 py-3
            bg-[#1a0b24]/90 backdrop-blur-md rounded-full border border-white/10 shadow-lg mb-15 mx-auto" 
            style={{
                backgroundColor: 'transparent'
            }}
        >
            <Flex justify="space-between" align="center" wrap="wrap" gap="middle">
                <SocialLinks />
                <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                    © {new Date().getFullYear()} Alfredo Álvarez. 
                </Text>
            </Flex>
        </Footer>
    )
}