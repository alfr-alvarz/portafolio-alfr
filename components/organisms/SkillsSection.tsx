import { GlassCard } from "components/molecules/GlassCard";
import { SkillsGrid } from "components/molecules/SkillsGrid";
import React from "react";

export const SkillsSection: React.FC = () => {
    return (
        <GlassCard title="Mis Habilidades">
            <SkillsGrid/>
        </GlassCard>
    );
};


