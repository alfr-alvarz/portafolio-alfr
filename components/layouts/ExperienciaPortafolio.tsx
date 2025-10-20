import React from "react";
import { Card, Layout } from "antd";
import { Header } from "components/organisms/Header";

const ExperienciaPortafolio = () => {
    return (
        <Layout style={{
            background: 'linear-gradient(163deg,rgba(118, 4, 212, 1) 0%, rgba(21, 6, 38, 1) 50%, rgba(213, 0, 255, 1) 100%)',
            minHeight: '100vh', 
            width: '100vw',    
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center',     
            padding: '0 5%'           
        }}>
            <header className="w-full flex justify-center p-4 fixed top-4 left-0 z-50">
                <Header/>
            </header>
            <main>
                <Card>
                    <p>Hola</p>
                </Card>
            </main>
        </Layout>
    );
}

export default ExperienciaPortafolio;