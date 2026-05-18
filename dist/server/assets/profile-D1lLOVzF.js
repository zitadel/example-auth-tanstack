import { jsxDEV, Fragment } from "react/jsx-dev-runtime";
import { H as Header, F as Footer } from "./Footer-C1WnHspE.js";
import { R as Route } from "./router-C6je9UwO.js";
import "@tanstack/react-router";
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
function ProfilePage() {
  const {
    session
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, { isAuthenticated: true }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 px-6 py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-8 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-green-500", children: /* @__PURE__ */ jsxDEV("svg", { className: "h-6 w-6 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 17,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 16,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 15,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-semibold text-green-900", children: "Authentication Successful!" }, void 0, false, {
            fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-1 text-green-700", children: "You have successfully completed the PKCE authentication flow." }, void 0, false, {
            fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
            lineNumber: 24,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 20,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mb-8 rounded-lg border border-gray-200 bg-white p-8", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "mb-6 text-3xl font-bold text-gray-900", children: "🔐 OAuth 2.0 PKCE Flow Completed" }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mb-8 text-lg text-gray-700", children: "Congratulations! You have successfully completed the OAuth 2.0 PKCE (Proof Key for Code Exchange) authentication flow. This demonstrates how modern applications securely authenticate users with Zitadel." }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-8 grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "mb-4 text-xl font-semibold text-gray-900", children: "What is PKCE?" }, void 0, false, {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
              lineNumber: 42,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "mb-4 text-gray-700", children: "PKCE is a security extension to OAuth 2.0 that protects against authorization code interception attacks. It's especially important for public clients like single-page applications and mobile apps." }, void 0, false, {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
              lineNumber: 45,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { className: "mb-3 text-lg font-semibold text-gray-900", children: "Key Benefits:" }, void 0, false, {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
              lineNumber: 51,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2 text-gray-700", children: [
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("svg", { className: "mr-2 h-4 w-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 57,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 56,
                  columnNumber: 21
                }, this),
                "No client secret required"
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 55,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("svg", { className: "mr-2 h-4 w-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 63,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 62,
                  columnNumber: 21
                }, this),
                "Prevents code interception"
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 61,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("svg", { className: "mr-2 h-4 w-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 69,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 68,
                  columnNumber: 21
                }, this),
                "Dynamic security per flow"
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 67,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
              lineNumber: 54,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
            lineNumber: 41,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "mb-4 text-xl font-semibold text-gray-900", children: "Flow Steps Completed" }, void 0, false, {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
              lineNumber: 76,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white", children: "✓" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 81,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "Code Verifier Generated" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 85,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-600", children: "Random cryptographic string created" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 88,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 84,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 80,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white", children: "✓" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 94,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "Code Challenge Created" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 98,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-600", children: "SHA256 hash of the verifier" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 101,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 97,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 93,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white", children: "✓" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 107,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "Authorization Request" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 111,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-600", children: "Redirected to Zitadel with challenge" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 114,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 110,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 106,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white", children: "✓" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 120,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "User Authentication" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 124,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-600", children: "Successfully authenticated with Zitadel" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 127,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 123,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 119,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-white", children: "✓" }, void 0, false, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 133,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "font-medium text-gray-900", children: "Token Exchange" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 137,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-gray-600", children: "Authorization code + verifier exchanged for tokens" }, void 0, false, {
                    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                    lineNumber: 140,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                  lineNumber: 136,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
                lineNumber: 132,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
              lineNumber: 79,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 40,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "rounded-lg border border-gray-200 bg-white p-8", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "mb-4 text-2xl font-semibold text-gray-900", children: "Session Information" }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "mb-6 text-gray-600", children: "Below is the authentication data stored in your session after a successful PKCE flow:" }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-lg bg-gray-900 p-6", children: /* @__PURE__ */ jsxDEV("pre", { className: "font-mono text-sm leading-relaxed text-green-400", children: JSON.stringify(session, null, 2) }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 158,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
        lineNumber: 149,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
      lineNumber: 165,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/mridang/Code/zitadel/example-tanstack-start-auth/app/routes/profile.tsx?tsr-split=component",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
export {
  ProfilePage as component
};
