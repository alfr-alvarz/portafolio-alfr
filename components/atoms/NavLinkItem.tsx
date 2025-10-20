import React from "react";
import { NavLink } from "react-router";

interface NavLinkItemProps {
    href: string;
    children: React.ReactNode;
}

export const NavLinkItem: React.FC<NavLinkItemProps> = ({ href,children}) => {
    return (
        <NavLink
            to={href}
        className={({ isActive}) =>
            `text-sm pb-1.5 transition-colors duration-300 ${
          isActive
            ? '!text-white font-semibold border-b-2 border-purple-400' // Activo: Blanco brillante
            : '!text-gray-300 hover:text-white' // Inactivo: Gris claro 
            }`
        }
    >
        {children}
    </NavLink>
    );
};