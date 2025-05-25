import React, { useState, useEffect } from 'react';
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import { Feather, Stars, GraduationCap, Heart } from 'lucide-react';

function randomArray(): number[] {
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

const LandingPage: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
  const cursorStyle: React.CSSProperties = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(227, 24, 55, 0.15), transparent 80%)`,
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic background effect */}
      <div className="fixed inset-0" style={cursorStyle} />

      {/* Animated geometric patterns */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-overlay animate-float-diagonal"
            style={{
              left: `${left[i] * 100}%`,
              top: `${top[i] * 100}%`,
              width: `${width[i] * 300 + Math.sin(scrollY / 20000) * 5}px`,
              height: `${height[i] * 300 + Math.sin(scrollY / 20000) * 2}px`,
              background: `linear-gradient(45deg, #E31837 ${i % 2 ? '0%' : '50%'}, transparent)`,
              animation: `float ${10 + i * 2}s infinite`,
              animationDelay: `${i * -0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Animated ravens silhouette background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(10)].map((_, i) => (
            <Feather
              key={i}
              className="absolute text-[#E31837] animate-float-diagonal"
              style={{
                left: `${left[i] * 100}%`,
                top: `${top[i] * 100}%`,
                fontSize: `${width[i] * 100 + 50}px`,
                animationDelay: `${i * -2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 relative">
            <span className="absolute -inset-2 blur-2xl bg-[#E31837]/20 animate-pulse" />
            <span className="relative bg-gradient-to-r from-white via-[#E31837] to-white bg-clip-text text-transparent animate-gradient-x">
              RavenHaven
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
            Where Carleton&apos;s spirit soars and community thrives
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              className="group relative overflow-hidden rounded-full px-8 py-6 text-lg bg-transparent border-2 border-[#E31837] hover:border-transparent transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-[#E31837] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="relative flex items-center space-x-2">
                <span>Join the Nest</span>
                <Heart className="h-5 w-5 group-hover:animate-heartbeat" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Stars className="h-12 w-12" />,
              title: "Campus Events",
              description: "Experience the magic of university life",
            },
            {
              icon: <GraduationCap className="h-12 w-12" />,
              title: "Academic Success",
              description: "Soar to new academic heights",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-[#E31837]/20 hover:border-[#E31837]/50 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative">
                <div className="mb-4 text-[#E31837] group-hover:animate-bounce">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Pulse Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-[#E31837]/20 shadow-[0_0_30px_rgba(227,24,55,0.2)]">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#E31837] to-white bg-clip-text text-transparent">
              Campus Pulse
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            {/* Calendar Section */}
            <div className="sm:mx-auto flex flex-col w-[50%]">
              <h3 className="text-2xl font-bold mb-2">Calendar</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={(day) => {
                  if (day) setDate(day);
                }}
                className="bg-transparent border-[#E31837]/20 w-full"
              />
            </div>

            {/* Upcoming Events Section */}
            <div className="sm:mx-auto flex flex-col gap-2 sm:w-[50%]">
              <h3 className="text-2xl font-bold mb-2">Upcoming Events</h3>
              {[
                {
                  title: "Event Title 1",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                  title: "Academic Success",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-xl bg-black/30 rounded-2xl p-8 border border-[#E31837]/20 hover:border-[#E31837]/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E31837]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-white/70">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 bg-black/50 border-t border-[#E31837]/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[#E31837] font-bold mb-4">About</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Our Team</li>
                <li>Mission</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#E31837] font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Events</li>
                <li>Community</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#E31837] font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Blog</li>
                <li>FAQs</li>
                <li>Help Center</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#E31837] font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-center text-white/50 text-sm">&copy; 2025 RavenHaven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
