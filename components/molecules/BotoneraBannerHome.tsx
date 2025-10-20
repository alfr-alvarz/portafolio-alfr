import React from "react";
import { Avatar, Button, Flex } from "antd";

const avatarStyle: React.CSSProperties ={
    width: "50%",
    
}

const BotoneraBannerHome = () => {
    return (
        <Flex justify="center">
            <img src={"assets/img/flecha-morada.png"} width={"30px"}></img>
            <Button color="purple" variant="solid" size="large">Ir a Proyectos</Button>
        </Flex>
    )
}

export default BotoneraBannerHome;