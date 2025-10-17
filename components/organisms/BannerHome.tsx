import { Flex } from "antd";
import BotoneraBannerHome from "components/molecules/BotoneraBannerHome";
import TextoBannerHome from "components/molecules/TextoBannerHome";
import React from "react";

const containerStyle: React.CSSProperties = {
    gap: "50px",

    backgroundColor: '#1f090936',
    border: "1px solid #000000ff",
    borderRadius: "8px",

    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    padding: "16px"
    
};

const BannerHome = () => {
    return (
        <Flex vertical style={containerStyle}>
            <TextoBannerHome />
            <BotoneraBannerHome/>
        </Flex>
    )
}

export default BannerHome;