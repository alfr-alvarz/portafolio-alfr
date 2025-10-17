import React from "react";
import { Layout } from "antd";
import TextoBannerHome from "components/molecules/TextoBannerHome";
import BannerHome from "components/organisms/BannerHome";

const HomePortafolio = () => {
    return (
        <Layout style={{
            backgroundColor: "#1d083fff",
            minHeight: '100vh', // Ocupa el 100% del alto de la pantalla
            width: '100vw',    // Ocupa el 100% del ancho de la pantalla
            display: 'flex',
            justifyContent: 'center', // Centra horizontalmente
            alignItems: 'center',     // Centra verticalmente
            padding: '0 5%'           // Mantenemos un poco de padding lateral
        }}>
            <BannerHome/>
        </Layout>
    );
}

export default HomePortafolio;