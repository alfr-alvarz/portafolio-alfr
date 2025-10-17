import React from "react";
import { Avatar, Button, Flex } from "antd";

const BotoneraBannerHome = () => {
    return (
        <Flex justify="space-between">
            <Avatar src={"assets/img/profile.jpg"} style={{}}/>
            <span style={{}}>➡️</span>
            <Button color="purple" variant="solid">Ir a Proyectos</Button>
        </Flex>
    )
}

export default BotoneraBannerHome;