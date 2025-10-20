import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/experiencia", "routes/experiencia.tsx"),
    route("/proyectos", "routes/proyectos.tsx")
] satisfies RouteConfig;
