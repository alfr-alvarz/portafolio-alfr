import React from "react";
import { NavLink } from "react-router";
import { BsCodeSlash } from "react-icons/bs";

export const LogoHeader: React.FC = () => {
    return (
        <NavLink
            to="/"
            className="text-white/60 border-dashed border-white/30 rounded-full p-2
                        hover:text-white hover:border-white transition-all duration-300"
            aria-label="Volver al inicio"
        >
            <BsCodeSlash size={22} />
        </NavLink>
    );
};
