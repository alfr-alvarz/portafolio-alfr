import React from "react";
import { Layout, Row, Col } from "antd"; 
import BannerHome from "components/organisms/BannerHome";
import { Header } from "components/organisms/Header";
import { WebFooter } from "components/organisms/WebFooter";
import { SkillsSection } from "components/organisms/SkillsSection";
import { UltimosProjectsSection } from "components/organisms/UltimosProjectsSection";
import { FormationSection } from "components/organisms/FormationSection";

const layoutStyle: React.CSSProperties = {
    background: 'linear-gradient(163deg,rgba(118, 4, 212, 1) 0%, rgba(21, 6, 38, 1) 50%, rgba(213, 0, 255, 1) 100%)',
    minHeight: '100vh',
    width: '100%',
};


const HomePortafolio = () => {
    return (
        <Layout style={layoutStyle}>
            <header className="w-full flex justify-center p-4 fixed top-4 left-0 z-50">
                <Header/>
            </header>


            <main className="w-full max-w-4xl mx-auto px-[5%] pt-32">
                <BannerHome/>
                <div className="mt-16">
                    <SkillsSection />
                </div>
                
                <div className="mt-16">
                    <Row gutter={[24, 24]}>
                        <Col xs={24} md={8}>
                            <FormationSection/>
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