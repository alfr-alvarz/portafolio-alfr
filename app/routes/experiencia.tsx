import type { Route } from "./+types/home";
import ExperienciaPortafolio from "components/layouts/ExperienciaPortafolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experiencia" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <ExperienciaPortafolio />
}