import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import App from "@layouts/App";
import Loading from "@layouts/Loading";

const NotFound = lazy(() => import("@layouts/NotFound"));
const ErrorElement = lazy(() => import("@layouts/Error"));

import.meta.glob("/src/styles/*.(scss|css)", { eager: true });

const LAZY_ROUTES = import.meta.glob("/src/screens/**/*.jsx");

const EAGER_ROUTES = import.meta.glob(
  ["/src/screens/**/*.eager.jsx", "!/src/screens/**/*.jsx"],
  { eager: true },
);

const getAction = async (module, ...args) => {
  const { action } = await module();
  return action ? action(...args) : null;
};

const getLoader = async (module, ...args) => {
  const { loader } = await module();
  return loader ? loader(...args) : null;
};

const createRoute = (module, isEager) => {
  const Component = isEager ? module.default : lazy(module);
  const preload = isEager ? null : module;
  const loader = isEager ? module?.loader : getLoader.bind(null, module);
  const action = isEager ? module?.action : getAction.bind(null, module);

  const element = <Component />;

  const errorElement = <ErrorElement />;

  return {
    element,
    errorElement,
    loader,
    action,
    preload,
  };
};

const createPathSegments = (key) =>
  key
    .replace(/\/src\/screens|\.jsx|\[\.{3}.+\]|\.lazy|\.eager/g, "")
    .replace(/\[(.+)\]/g, ":$1")
    .toLowerCase()
    .split("/")
    .filter((p) => !p.includes("_") && p !== "");

const insertRoute = (routes, segments, route) => {
  const insert = /^\w|\//.test(route.path) ? "unshift" : "push";

  const insertNode = (parent, segment, index) => {
    const path = segment.replace(/index|\./g, "");
    const root = index === 0;
    const leaf = index === segments.length - 1 && segments.length > 1;
    const node = !root && !leaf;

    if (root) {
      const dynamic = path.startsWith("[") || path === "*";
      if (dynamic) return parent;
      const last = segments.length === 1;
      if (last) {
        routes.push({ path, ...route });
        return parent;
      }
    }

    if (root || node) {
      const current = root ? routes : parent.children;
      const found = current?.find((route) => route.path === path);
      if (found) {
        found.children ??= [];
      } else {
        current?.[insert]({ path, children: [] });
      }
      return found || current?.[insert === "unshift" ? 0 : current.length - 1];
    }

    if (leaf) {
      parent?.children?.[insert]({ path: path.replace(/\/$/, ""), ...route });
    }

    return parent;
  };

  segments.reduce(insertNode, {});
};

const createRoutes = (modules, isEager) =>
  Object.keys(modules).reduce((routes, key) => {
    const module = modules[key];
    const route = createRoute(module, isEager);
    const segments = createPathSegments(key);
    insertRoute(routes, segments, route);
    return routes;
  }, []);

const EagerRoutes = createRoutes(EAGER_ROUTES, true);
export const LazyRoutes = createRoutes(LAZY_ROUTES, false);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
    children: [...EagerRoutes, ...LazyRoutes],
  },
  { path: "*", Component: NotFound },
]);

export default () => <RouterProvider router={router} />;
