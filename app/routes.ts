import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/api/error-test", "routes/api/error-test.ts"),
] satisfies RouteConfig;
