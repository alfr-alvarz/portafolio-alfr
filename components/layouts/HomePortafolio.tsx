import React from "react";
import { Card, Layout } from "antd";
import BannerHome from "components/organisms/BannerHome";
import { Header } from "components/organisms/Header";
import { WebFooter } from "components/organisms/WebFooter";
import { SkillsSection } from "components/organisms/SkillsSection";

const HomePortafolio = () => {
    return (
        <Layout style={{
            background: 'linear-gradient(163deg,rgba(118, 4, 212, 1) 0%, rgba(21, 6, 38, 1) 50%, rgba(213, 0, 255, 1) 100%)',
            minHeight: '100vh', // Ocupa el 100% del alto de la pantalla
            width: '100%',    // Ocupa el 100% del ancho de la pantalla
        }}>
            <header className="w-full flex justify-center p-4 fixed top-4 left-0 z-50">
                <Header/>
            </header>
            <main className="w-full max-w-screen px-[5%] pt-32">
                <BannerHome/>
                <div className="w-full max-w-4xl mx-auto mt-16">
                    <SkillsSection />
                </div>
            </main>
            <WebFooter/>
        </Layout>
    );
}

export default HomePortafolio;