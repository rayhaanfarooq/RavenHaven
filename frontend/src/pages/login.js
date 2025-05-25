"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const card_1 = require("../components/ui/card");
const input_1 = require("../components/ui/input");
const button_1 = require("../components/ui/button");
const lucide_react_1 = require("lucide-react");
const react_router_dom_1 = require("react-router-dom");
const Login = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // Simulate loading
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "min-h-screen flex items-center justify-center bg-black text-white" }, { children: (0, jsx_runtime_1.jsxs)(card_1.Card, Object.assign({ className: "w-full max-w-md bg-black/30 border border-[#E31837]/50 shadow-xl rounded-lg p-6" }, { children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, Object.assign({ className: "text-center text-2xl font-bold mb-4 text-[#E31837]" }, { children: "Login" })) }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { children: [(0, jsx_runtime_1.jsxs)("form", Object.assign({ className: "flex flex-col gap-4 space-y-4" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(input_1.Input, { type: "text", placeholder: "Username", className: "w-full bg-black text-white border-[#E31837]/50" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(input_1.Input, { type: "password", placeholder: "Password", className: "w-full bg-black text-white border-[#E31837]/50" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/clubhead" }, { children: (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ type: "button", onClick: handleLogin, disabled: loading, className: "w-full flex items-center justify-center bg-[#E31837] hover:bg-[#E31837]/80 transition" }, { children: loading ? (0, jsx_runtime_1.jsx)(lucide_react_1.Loader, { className: "animate-spin mr-2", size: 16 }) : "Login" })) }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "text-center mt-4" }, { children: (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "text-sm text-white/70" }, { children: ["Don't have an account? ", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/register", className: "text-[#E31837] font-medium hover:underline" }, { children: "Register with us" }))] })) }))] })] })) })));
};
exports.default = Login;
