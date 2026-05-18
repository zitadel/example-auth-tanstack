import { Link, createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent, redirect, createRouter as createRouter$1 } from "@tanstack/react-router";
import { jsxDEV } from "react/jsx-dev-runtime";
import { Component } from "react";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error);
    console.error("Error Info:", errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }
  handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxDEV("main", { className: "grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ jsxDEV(
          "svg",
          {
            className: "h-8 w-8 text-red-600",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsxDEV(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              },
              void 0,
              false,
              {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
                lineNumber: 94,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
            lineNumber: 87,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "text-base font-semibold text-red-600", children: "Error" }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h1", { className: "mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl", children: "Something went wrong" }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8", children: "An unexpected error occurred. Please try reloading the page." }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: this.handleReload,
              className: "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
              children: "Reload page"
            },
            void 0,
            false,
            {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/",
              className: "rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500",
              children: "Go back home"
            },
            void 0,
            false,
            {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
              lineNumber: 116,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/components/ErrorBoundary.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this);
    }
    return this.props.children;
  }
}
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }),
  component: RootComponent,
  notFoundComponent: NotFound
});
function NotFound() {
  return /* @__PURE__ */ jsxDEV("main", { className: "grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100", children: /* @__PURE__ */ jsxDEV(
      "svg",
      {
        className: "h-8 w-8 text-gray-600",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        children: /* @__PURE__ */ jsxDEV(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          },
          void 0,
          false,
          {
            fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
        lineNumber: 29,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl", children: "Page not found" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8", children: "Sorry, we couldn't find the page you're looking for." }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: /* @__PURE__ */ jsxDEV(
      Link,
      {
        to: "/",
        className: "rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500",
        children: "Go back home"
      },
      void 0,
      false,
      {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
        lineNumber: 50,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function RootComponent() {
  return /* @__PURE__ */ jsxDEV("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV("head", { children: /* @__PURE__ */ jsxDEV(HeadContent, {}, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("body", { className: "flex min-h-screen flex-col bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV(ErrorBoundary, { showDetails: true, children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Scripts, {}, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/__root.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const fetchSession = createServerFn({
  method: "GET"
}).handler(createSsrRpc("06bf63aa78f39b038d0e9ab2f3c3fbcdec13644d2f497bc2283101a979cb61e4"));
const $$splitComponentImporter$5 = () => import("./profile-D1lLOVzF.js");
const Route$5 = createFileRoute("/profile")({
  loader: async () => {
    const session = await fetchSession();
    if (!session) {
      throw redirect({
        to: "/auth/login"
      });
    }
    return {
      session
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CDRSWSNn.js");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./success-CKpSyAos.js");
const Route$3 = createFileRoute("/logout/success")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./error-DhqNd60R.js");
const Route$2 = createFileRoute("/logout/error")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  validateSearch: (search) => ({
    reason: search.reason ?? null
  })
});
const $$splitComponentImporter$1 = () => import("./login-iOYCcXt2.js");
const Route$1 = createFileRoute("/auth/login")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
  // Deliberately no validateSearch: TanStack Router's search-param
  // normalisation would redirect /auth/login → /auth/login?error=null&...
  // and back in an infinite loop when validateSearch returns null-valued keys.
  // Raw search params are read directly from the URL in the component instead.
});
const $$splitComponentImporter = () => import("./error-CbWv0tAt.js");
const Route = createFileRoute("/auth/error")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  validateSearch: (search) => ({
    error: search.error ?? null
  })
});
const ProfileRoute = Route$5.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const LogoutSuccessRoute = Route$3.update({
  id: "/logout/success",
  path: "/logout/success",
  getParentRoute: () => Route$6
});
const LogoutErrorRoute = Route$2.update({
  id: "/logout/error",
  path: "/logout/error",
  getParentRoute: () => Route$6
});
const AuthLoginRoute = Route$1.update({
  id: "/auth/login",
  path: "/auth/login",
  getParentRoute: () => Route$6
});
const AuthErrorRoute = Route.update({
  id: "/auth/error",
  path: "/auth/error",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  ProfileRoute,
  AuthErrorRoute,
  AuthLoginRoute,
  LogoutErrorRoute,
  LogoutSuccessRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
function createRouter() {
  return createRouter$1({
    routeTree,
    scrollRestoration: true
  });
}
async function getRouter() {
  return createRouter();
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRouter,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$5 as R,
  Route$2 as a,
  Route$1 as b,
  Route as c,
  router as r
};
