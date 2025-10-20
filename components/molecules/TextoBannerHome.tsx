import React from "react";
import { Typography } from "antd";

const {Title,Paragraph} = Typography;

const TextoBannerHome = () => {
    return (
        <div style={{textAlign:"left"}}>
            <Title level={1} style={{fontWeight:"bold",color:"white",textShadow: '0px 2px 13px rgba(255, 255, 255, 0.25)',marginBottom:"3px"}}>
                Alfredo Álvarez
            </Title>
            <Title level={3} style={{fontWeight:"bold",color:"#b99cd1",marginTop:"4px"}}>
                Estudiante de Informática
            </Title>
            <Paragraph style={{ fontSize:"16px",maxWidth: "600px",margin:"1% 0px 0px",color:"white"}}>
                Creando diversos proyectos de starter con gran cantidad de lógica detrás.
                La confección de aplicaciones y sitios no se detiene.
            </Paragraph>
        </div>
    )
}

export default TextoBannerHome;