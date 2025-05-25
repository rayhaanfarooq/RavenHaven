"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const card_1 = require("../components/ui/card");
const table_1 = require("../components/ui/table");
const Events = () => {
    // Dummy data for events
    const upcomingEvents = [
        {
            id: 1,
            title: "Team Meeting",
            date: "2023-06-15",
            time: "10:00 AM",
            description: "Monthly team alignment meeting."
        },
        {
            id: 2,
            title: "Workshop",
            date: "2023-06-20",
            time: "02:00 PM",
            description: "ReactJS advanced workshop."
        },
        {
            id: 3,
            title: "Conference",
            date: "2023-06-25",
            time: "09:00 AM",
            description: "Annual tech conference."
        },
    ];
    const allEvents = [
        { id: 1, title: "Team Meeting", date: "2023-06-15", time: "10:00 AM" },
        { id: 2, title: "Workshop", date: "2023-06-20", time: "02:00 PM" },
        { id: 3, title: "Conference", date: "2023-06-25", time: "09:00 AM" },
        { id: 4, title: "Networking Event", date: "2023-07-05", time: "05:00 PM" },
    ];
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "min-h-screen bg-black text-white py-12" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, { children: [(0, jsx_runtime_1.jsxs)("section", Object.assign({ className: "mb-12" }, { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-6xl font-extrabold text-[#E31837] mt-16 mb-6" }, { children: "Welcome to the Events page" })), (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-xl text-white/70 mb-6" }, { children: "Here you will see all events being organized by club heads with important information on them. " })), (0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl font-extrabold text-[#E31837] mb-6" }, { children: "Upcoming Events" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, { children: upcomingEvents.map((event) => ((0, jsx_runtime_1.jsxs)(card_1.Card, Object.assign({ className: "shadow-lg bg-black/30 border border-[#E31837]/50 hover:border-[#E31837] transition-all duration-300" }, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, Object.assign({ className: "text-white" }, { children: event.title })), (0, jsx_runtime_1.jsxs)(card_1.CardDescription, Object.assign({ className: "text-[#E31837]" }, { children: [event.date, " at ", event.time] }))] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsx)("p", Object.assign({ className: "text-white/70" }, { children: event.description })) })] }), event.id))) }))] })), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", Object.assign({ className: "text-3xl font-extrabold text-[#E31837] mb-6" }, { children: "All Events" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "bg-black/30 border border-[#E31837]/50 shadow-lg rounded-lg p-6" }, { children: (0, jsx_runtime_1.jsxs)(table_1.Table, { children: [(0, jsx_runtime_1.jsx)(table_1.TableHeader, { children: (0, jsx_runtime_1.jsxs)(table_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(table_1.TableHead, Object.assign({ className: "text-[#E31837]" }, { children: "Event" })), (0, jsx_runtime_1.jsx)(table_1.TableHead, Object.assign({ className: "text-[#E31837]" }, { children: "Date" })), (0, jsx_runtime_1.jsx)(table_1.TableHead, Object.assign({ className: "text-[#E31837]" }, { children: "Time" }))] }) }), (0, jsx_runtime_1.jsx)(table_1.TableBody, { children: allEvents.map((event) => ((0, jsx_runtime_1.jsxs)(table_1.TableRow, Object.assign({ className: "hover:bg-[#E31837]/20 transition-colors" }, { children: [(0, jsx_runtime_1.jsx)(table_1.TableCell, Object.assign({ className: "text-white" }, { children: event.title })), (0, jsx_runtime_1.jsx)(table_1.TableCell, Object.assign({ className: "text-white/70" }, { children: event.date })), (0, jsx_runtime_1.jsx)(table_1.TableCell, Object.assign({ className: "text-white/70" }, { children: event.time }))] }), event.id))) })] }) }))] })] })) })));
};
exports.default = Events;
