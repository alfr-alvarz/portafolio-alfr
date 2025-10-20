import React from "react";
import { Avatar } from "antd";

const avatarStyle: React.CSSProperties = {
    width: '30%', 
    
    height: 'auto', 
    
    minWidth: '100px',
    boxShadow: "0 0 15px 4px rgba(200, 160, 255, 0.4)",
}

const AvatarBanner = () => {
    return (
        <Avatar src={"assets/img/profile.gif"} style={avatarStyle}/>
    )
}
export default AvatarBanner;