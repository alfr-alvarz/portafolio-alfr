import type { Route } from "./+types/home";
import ProyectosPortafolio from "components/layouts/ProyectosPortafolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Proyectos" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ProyectosPortafolio />
}