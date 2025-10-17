import React from "react";
import { Typography } from "antd";

const {Title,Paragraph} = Typography;

const TextoBannerHome = () => {
    return (
        <div style={{textAlign:"center"}}>
            <Title level={1} style={{fontWeight:"bold",color:"white",textShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)'}}>
                Alfredo Álvarez
            </Title>
            <Title level={3} style={{fontWeight:"bold",color:"#b99cd1"}}>
                Estudiante de Informática
            </Title>
            <Paragraph style={{ fontSize:"16px",maxWidth: "600px",margin:"0 auto",color:"white"}}>
                Creando diversos proyectos de starter con gran cantidad de lógica detrás.
                La confección de aplicaciones y sitios no se detiene.
            </Paragraph>
        </div>
    )
}

export default TextoBannerHome;