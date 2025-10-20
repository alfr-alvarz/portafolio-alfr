import React from "react";
import { LogoHeader } from "components/atoms/LogoHeader";
import { BotonContacto } from "components/atoms/BotonContacto";
import { MenuHeader } from "components/molecules/MenuHeader";

export const Header: React.FC = () => {
    return (
        <nav className="w-full max-w-4xl flex items-center justify-between px-5 py-3
        bg-[#1a0b24]/70 backdrop-blur-md rounded-full border border-white/10 shadow-lg mb-15">
            <LogoHeader />
            <MenuHeader />
            <BotonContacto />
        </nav>
    )
}