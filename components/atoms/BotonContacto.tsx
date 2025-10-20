import React from "react";

export const BotonContacto: React.FC = () => {
    return (
        <button 
            className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 px-6 py-2.5 text-sm
            font-semibold text-white shadow-md transition-transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-fuchsia-400
            focus:ring-offset-2 focus:ring-offset-black/20">
                Contacto
            </button>
    );
};