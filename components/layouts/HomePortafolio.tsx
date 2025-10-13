import React from "react";
import {Flex,Layout} from "antd";
import TextoBannerHome from "components/molecules/TextoBannerHome";

const HomePortafolio = () => {
    return (
        <Flex>
            <Layout style={{backgroundColor:"#210254",justifyContent:"center", padding:"25% 5%"}}>
                <TextoBannerHome/>
            </Layout>
        </Flex>
    )
}

export default HomePortafolio;