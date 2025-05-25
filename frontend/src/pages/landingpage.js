"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const calendar_1 = require("../components/ui/calendar");
const button_1 = require("../components/ui/button");
const lucide_react_1 = require("lucide-react");
function randomArray() {
    const arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push(Math.random());
    }
    return arr;
}
const left = randomArray();
const top = randomArray();
const width = randomArray();
const height = randomArray();
const LandingPage = () => {
    const [date, setDate] = (0, react_1.useState)(new Date());
    const [mousePosition, setMousePosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const [scrollY, setScrollY] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Custom cursor glow effect
    const cursorStyle = {
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(227, 24, 55, 0.15), transparent 80%)`,
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "min-h-screen bg-black text-white overflow-hidden" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0", style: cursorStyle }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "fixed inset-0 overflow-hidden opacity-20" }, { children: [...Array(50)].map((_, i) => ((0, jsx_runtime_1.jsx)("div", { className: "absolute rounded-full mix-blend-overlay animate-float-diagonal", style: {
                        left: `${left[i] * 100}%`,
                        top: `${top[i] * 100}%`,
                        width: `${width[i] * 300 + Math.sin(scrollY / 20000) * 5}px`,
                        height: `${height[i] * 300 + Math.sin(scrollY / 20000) * 2}px`,
                        background: `linear-gradient(45deg, #E31837 ${i % 2 ? '0%' : '50%'}, transparent)`,
                        animation: `float ${10 + i * 2}s infinite`,
                        animationDelay: `${i * -0.5}s`,
                    } }, i))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative min-h-screen flex items-center justify-center px-4" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "absolute inset-0 overflow-hidden opacity-10" }, { children: [...Array(10)].map((_, i) => ((0, jsx_runtime_1.jsx)(lucide_react_1.Feather, { className: "absolute text-[#E31837] animate-float-diagonal", style: {
                                left: `${left[i] * 100}%`,
                                top: `${top[i] * 100}%`,
                                fontSize: `${width[i] * 100 + 50}px`,
                                animationDelay: `${i * -2}s`,
                            } }, i))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative z-10 text-center" }, { children: [(0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: "text-7xl md:text-9xl font-bold mb-8 relative" }, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute -inset-2 blur-2xl bg-[#E31837]/20 animate-pulse" }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "relative bg-gradient-to-r from-white via-[#E31837] to-white bg-clip-text text-transparent animate-gradient-x" }, { children: "RavenHaven" }))] })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto font-light" }, { children: "Where Carleton's spirit soars and community thrives" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "flex flex-wrap justify-center gap-6" }, { children: (0, jsx_runtime_1.jsxs)(button_1.Button, Object.assign({ className: "group relative overflow-hidden rounded-full px-8 py-6 text-lg bg-transparent border-2 border-[#E31837] hover:border-transparent transition-colors duration-300" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-[#E31837] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative flex items-center space-x-2" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "Join the Nest" }), (0, jsx_runtime_1.jsx)(lucide_react_1.Heart, { className: "h-5 w-5 group-hover:animate-heartbeat" })] }))] })) }))] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "relative z-10 max-w-7xl mx-auto px-4 py-24" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, { children: [
                        {
                            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Stars, { className: "h-12 w-12" }),
                            title: "Campus Events",
                            description: "Experience the magic of university life",
                        },
                        {
                            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.GraduationCap, { className: "h-12 w-12" }),
                            title: "Academic Success",
                            description: "Soar to new academic heights",
                        },
                    ].map((feature, index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "group relative backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-[#E31837]/20 hover:border-[#E31837]/50 transition-all duration-500 hover:transform hover:-translate-y-2" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#E31837]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mb-4 text-[#E31837] group-hover:animate-bounce" }, { children: feature.icon })), (0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "text-2xl font-bold mb-2" }, { children: feature.title })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-white/70" }, { children: feature.description }))] }))] }), index))) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "relative z-10 max-w-7xl mx-auto px-4 py-16" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-[#E31837]/20 shadow-[0_0_30px_rgba(227,24,55,0.2)]" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-4xl font-bold mb-8 text-center" }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "bg-gradient-to-r from-[#E31837] to-white bg-clip-text text-transparent" }, { children: "Campus Pulse" })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col sm:flex-row justify-between gap-2" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "sm:mx-auto flex flex-col w-[50%]" }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "text-2xl font-bold mb-2" }, { children: "Calendar" })), (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { mode: "single", selected: date, onSelect: (day) => {
                                                if (day)
                                                    setDate(day);
                                            }, className: "bg-transparent border-[#E31837]/20 w-full" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "sm:mx-auto flex flex-col gap-2 sm:w-[50%]" }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "text-2xl font-bold mb-2" }, { children: "Upcoming Events" })), [
                                            {
                                                title: "Event Title 1",
                                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                            },
                                            {
                                                title: "Academic Success",
                                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                            },
                                        ].map((event, index) => ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "group relative backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-[#E31837]/20 hover:border-[#E31837]/50 transition-all duration-500 hover:transform hover:-translate-y-2" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#E31837]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "relative" }, { children: [(0, jsx_runtime_1.jsx)("h3", Object.assign({ className: "text-2xl font-bold mb-2" }, { children: event.title })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-white/70" }, { children: event.description }))] }))] }), index)))] }))] }))] })) })), (0, jsx_runtime_1.jsx)("footer", Object.assign({ className: "relative z-10 mt-24 bg-black/50 border-t border-[#E31837]/20" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-7xl mx-auto px-4 py-12" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "grid grid-cols-2 md:grid-cols-4 gap-8" }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "text-[#E31837] font-bold mb-4" }, { children: "About" })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "space-y-2 text-white/70 text-sm" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: "Our Team" }), (0, jsx_runtime_1.jsx)("li", { children: "Mission" }), (0, jsx_runtime_1.jsx)("li", { children: "Contact" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "text-[#E31837] font-bold mb-4" }, { children: "Services" })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "space-y-2 text-white/70 text-sm" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: "Events" }), (0, jsx_runtime_1.jsx)("li", { children: "Community" }), (0, jsx_runtime_1.jsx)("li", { children: "Support" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "text-[#E31837] font-bold mb-4" }, { children: "Resources" })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "space-y-2 text-white/70 text-sm" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: "Blog" }), (0, jsx_runtime_1.jsx)("li", { children: "FAQs" }), (0, jsx_runtime_1.jsx)("li", { children: "Help Center" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "text-[#E31837] font-bold mb-4" }, { children: "Follow Us" })), (0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "space-y-2 text-white/70 text-sm" }, { children: [(0, jsx_runtime_1.jsx)("li", { children: "Twitter" }), (0, jsx_runtime_1.jsx)("li", { children: "Instagram" }), (0, jsx_runtime_1.jsx)("li", { children: "Facebook" })] }))] })] })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "mt-12 text-center text-white/50 text-sm" }, { children: "\u00A9 2025 RavenHaven. All rights reserved." }))] })) }))] })));
};
exports.default = LandingPage;
