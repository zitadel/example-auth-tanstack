import { jsxDEV } from "react/jsx-dev-runtime";
import { Link } from "@tanstack/react-router";
import { g as getMessage } from "./message-Cyq2PHvt.js";
import { c as Route } from "./router-C6je9UwO.js";
import "react";
import "../server.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@auth/core";
import "@auth/core/errors";
import "@auth/core/providers/zitadel";
import "openid-client";
function ErrorPage() {
  const {
    error
  } = Route.useSearch();
  const {
    heading,
    message
  } = getMessage(error ?? "default", "auth-error");
  return /* @__PURE__ */ jsxDEV("main", { className: "grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100", children: /* @__PURE__ */ jsxDEV("svg", { className: "h-8 w-8 text-red-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
      lineNumber: 18,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl", children: heading }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8", children: message }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/auth/login", className: "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600", children: "Try signing in again" }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500", children: "Go back home" }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/error.tsx?tsr-split=component",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
export {
  ErrorPage as component
};
