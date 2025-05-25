"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const card_1 = require("../components/ui/card");
const input_1 = require("../components/ui/input");
const button_1 = require("../components/ui/button");
const ClubHeadView = ({ clubName, events }) => {
    const [newPost, setNewPost] = (0, react_1.useState)("");
    const handleNewPostSubmit = () => {
        alert(`New post submitted: ${newPost}`);
        setNewPost("");
    };
    const handleInputChange = (e) => {
        setNewPost(e.target.value);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "min-h-screen bg-black text-white py-12" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: [(0, jsx_runtime_1.jsx)("section", Object.assign({ className: "mb-12 text-center" }, { children: (0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: "text-4xl font-extrabold text-[#E31837]" }, { children: ["Hello, ", clubName, "!"] })) })), (0, jsx_runtime_1.jsxs)("section", Object.assign({ className: "mb-12" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl font-extrabold text-[#E31837] mb-6" }, { children: "Your Events" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, { children: events.map((event) => ((0, jsx_runtime_1.jsxs)(card_1.Card, Object.assign({ className: "shadow-lg bg-black/30 border border-[#E31837]/50 hover:border-[#E31837] transition-all duration-300" }, { children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, Object.assign({ className: "text-white" }, { children: event.title })) }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-white/70" }, { children: event.description })), (0, jsx_runtime_1.jsxs)("p", Object.assign({ className: "text-[#E31837]" }, { children: [event.date, " at ", event.time] })), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ variant: "outline", size: "sm", className: "mt-2 bg-[#E31837] border-[#E31837] text-white hover:bg-white hover:text-[#E31837]" }, { children: "Edit" }))] })] }), event.id))) }))] })), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl font-extrabold text-[#E31837] mb-6" }, { children: "Author a New Post" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "bg-black/30 border border-[#E31837]/50 shadow-lg rounded-lg p-6" }, { children: [(0, jsx_runtime_1.jsx)(input_1.Input, { type: "text", placeholder: "Write something...", className: "w-full bg-black text-white border-[#E31837]/50 mb-4", value: newPost, onChange: handleInputChange }), (0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ onClick: handleNewPostSubmit, className: "w-full bg-[#E31837] hover:bg-[#E31837]/80 transition", disabled: !newPost.trim() }, { children: "Submit Post" }))] }))] })] })) })));
};
exports.default = ClubHeadView;
