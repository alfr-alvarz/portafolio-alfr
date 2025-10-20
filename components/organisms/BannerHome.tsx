import { Flex } from "antd";
import AvatarBanner from "components/molecules/AvatarBanner";
import TextoBannerHome from "components/molecules/TextoBannerHome";
import React from "react";

const containerStyle: React.CSSProperties = {
    gap: "50px",

    backgroundColor: '#1f090936',
    border: "1px solid #000000ff",
    borderRadius: "8px",

    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
    padding: "16px",

    maxWidth: "50%",
    marginTop: "15px"
    
};


const BannerHome = () => {
    return (
        <>
            <Flex>
                
                <Flex style={containerStyle}>
                    <TextoBannerHome />
                </Flex>
                <Flex justify="center" align="center" style={{flex:1}}>
                    <AvatarBanner />
                </Flex>

            </Flex>

            
            
        </>
    )
}

export default BannerHome;