import { Row, Col, Flex } from "antd"; // Importa Row y Col
import AvatarBanner from "components/molecules/AvatarBanner";
import TextoBannerHome from "components/molecules/TextoBannerHome";
import { GlassCard } from "components/molecules/GlassCard"; 
import React from "react";


const BannerHome = () => {
    return (
        
        <Row gutter={[24, 24]} align="middle">

            <Col xs={24} md={16}>
                <GlassCard>
                    <TextoBannerHome />
                </GlassCard>
            </Col>

            <Col xs={24} md={8}>
                <Flex justify="center" align="center" style={{ height: '100%' }}>
                    <AvatarBanner />
                </Flex>
            </Col>

        </Row>
    )
}

export default BannerHome;