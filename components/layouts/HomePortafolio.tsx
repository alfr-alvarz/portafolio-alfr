import React from "react";
import { Layout, Row, Col } from "antd"; 
import BannerHome from "components/organisms/BannerHome";
import { Header } from "components/organisms/Header";
import { WebFooter } from "components/organisms/WebFooter";
import { SkillsSection } from "components/organisms/SkillsSection";
import { UltimosProjectsSection } from "components/organisms/UltimosProjectsSection";



const layoutStyle: React.CSSProperties = {
    background: 'linear-gradient(163deg,rgba(118, 4, 212, 1) 0%, rgba(21, 6, 38, 1) 50%, rgba(213, 0, 255, 1) 100%)',
    minHeight: '100vh',
    width: '100%',
};


const placeholderStyle: React.CSSProperties = {
    height: '100%', 
    minHeight: '200px',
    display: 'grid', 
    placeContent: 'center', 
    background: 'rgba(26, 11, 36, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    color: 'white',
    backdropFilter: 'blur(10px)'
};


const HomePortafolio = () => {
    return (
        <Layout style={layoutStyle}>
            <header className="w-full flex justify-center p-4 fixed top-4 left-0 z-50">
                <Header/>
            </header>
            <main className="w-full max-w-screen px-[5%] pt-32">
                <BannerHome/>
                <div className="w-full max-w-4xl mx-auto mt-16">
                    <SkillsSection />
                </div>
                <div className="w-full max-w-4xl mx-auto mt-16">
                    <Row gutter={[24, 24]}>
                        <Col xs={24} md={8}>
                            <div style={placeholderStyle}>
                                (Próximamente: Formación)
                            </div>
                        </Col>
                        <Col xs={24} md={16}>
                            <UltimosProjectsSection />
                        </Col>
                    </Row>
                </div>
            </main>
            <WebFooter/>
        </Layout>
    );
}

export default HomePortafolio;