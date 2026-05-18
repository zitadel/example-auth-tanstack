import { jsxDEV } from "react/jsx-dev-runtime";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
function LogoutSuccessPage() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.setAttribute("http-equiv", "refresh");
    meta.setAttribute("content", "10;url=/");
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  return /* @__PURE__ */ jsxDEV("main", { className: "grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100", children: /* @__PURE__ */ jsxDEV("svg", { className: "h-8 w-8 text-green-600", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 20,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 19,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl", children: "Logout successful" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8", children: "Redirecting in 10 seconds…" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500", children: "Return home now" }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/logout/success.tsx?tsr-split=component",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
export {
  LogoutSuccessPage as component
};
