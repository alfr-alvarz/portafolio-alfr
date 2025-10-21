import { Tooltip, Flex } from "antd";
import React from "react";

interface SkillItemProps {
    icon: React.ReactNode;
    label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({icon,label}) => (
    <Tooltip title={label}>
        <Flex
            align="center"
            justify="center"
            style={{
                minWidth: 80,
                minHeight: 60
            }}>
                <span style={{fontSize:"32px", color:"#e0e0e0"}}>
                    {icon}
                </span>
        </Flex>
    </Tooltip>
);
export default SkillItem;