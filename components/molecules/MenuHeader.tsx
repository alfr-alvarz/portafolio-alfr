import React from "react";
import { NavLinkItem } from "components/atoms/NavLinkItem";

const navLinks = [
    { href: '/', label: 'Home'},
    { href: '/experiencia', label: 'Historia y Experiencia'},
    { href: '/proyectos', label: 'Proyectos'}, 
];

export const MenuHeader: React.FC = () => {
    return (
        
        <ul className="md:flex items-center gap-x-8">
            {navLinks.map((link) => (
                <li key={link.href}>
                    <NavLinkItem href={link.href}>{link.label}</NavLinkItem>
                </li>
            ))}
        </ul>
    )
}

//Si contact es también un enlace entonces eliminar el boton contacto del organism.
