import React from "react";
import { Layout } from "antd";
import BannerHome from "components/organisms/BannerHome";
import { Header } from "components/organisms/Header";

const HomePortafolio = () => {
    return (
        <Layout style={{
            background: 'linear-gradient(163deg,rgba(118, 4, 212, 1) 0%, rgba(21, 6, 38, 1) 50%, rgba(213, 0, 255, 1) 100%)',
            minHeight: '100vh', // Ocupa el 100% del alto de la pantalla
            width: '100vw',    // Ocupa el 100% del ancho de la pantalla
            display: 'flex',
            justifyContent: 'center', // Centra horizontalmente
            alignItems: 'center',     // Centra verticalmente
            padding: '0 5%'           // Mantenemos un poco de padding lateral
        }}>
            <header className="w-full flex justify-center p-4 fixed top-4 left-0 z-50">
                <Header/>
            </header>
            <main>
                <BannerHome/>
            </main>
        </Layout>
    );
}

export default HomePortafolio;