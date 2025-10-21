import { SiCss3, SiNodedotjs, SiPython, SiReact, SiSpringboot, SiCplusplus, SiHtml5, SiMysql } from "react-icons/si";
import SkillItem from "components/atoms/SkillItem"
import { Flex } from "antd";


const skillsData = [
    {key: "python", icon: <SiPython/>, label:"Python"},
    { key: 'react1', icon: <SiReact />, label: 'React' },
    {key: 'springboot', icon: <SiSpringboot/>, label: "SpringBoot"},
    {key: 'c++', icon: <SiCplusplus/>, label: "C++"},
    { key: 'nodejs', icon: <SiNodedotjs />, label: 'Node.js' },
    {key: 'html5', icon: <SiHtml5/>, label: "HTML5"},
    { key: 'css', icon: <SiCss3 />, label: 'CSS' },
    { key: 'mysql', icon: <SiMysql />, label: 'MySQL' }
]

export const SkillsGrid: React.FC = () => (
    <Flex wrap="wrap" gap="large" justify="space-around">
        {skillsData.map(skill => (
            <SkillItem key={skill.key} icon={skill.icon} label={skill.label}/>
        ))}
    </Flex>
);