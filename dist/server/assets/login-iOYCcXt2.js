import { jsxDEV } from "react/jsx-dev-runtime";
import { Link } from "@tanstack/react-router";
import { g as getMessage } from "./message-Cyq2PHvt.js";
import { b as Route } from "./router-C6je9UwO.js";
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
function LoginPage() {
  const search = Route.useSearch();
  const error = search.error;
  const callbackUrl = search.callbackUrl;
  const {
    message
  } = getMessage(error, "signin-error");
  return /* @__PURE__ */ jsxDEV("main", { className: "grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-md text-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100", children: /* @__PURE__ */ jsxDEV("svg", { className: "h-8 w-8 text-blue-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 18,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl", children: "Sign in" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: `mt-6 text-lg font-medium text-pretty sm:text-xl/8 ${error ? "text-red-600" : "text-gray-500"}`, children: error ? message : "Continue to your account" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-10", children: /* @__PURE__ */ jsxDEV("a", { href: `/api/auth/signin/zitadel${callbackUrl ? `?callbackUrl=${encodeURIComponent(callbackUrl)}` : ""}`, className: "flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700", children: [
      /* @__PURE__ */ jsxDEV("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { fillRule: "evenodd", d: "M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z", clipRule: "evenodd" }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      "Sign in with Zitadel"
    ] }, void 0, true, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "inline-flex items-center text-sm text-gray-500 hover:text-gray-700", children: [
      /* @__PURE__ */ jsxDEV("svg", { className: "mr-2 h-4 w-4", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      "Back to home"
    ] }, void 0, true, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/auth/login.tsx?tsr-split=component",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
export {
  LoginPage as component
};
