"use client";

import Link from 'next/link'; 
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

type NavLink = {
  name: string;
  href: string;
};

// ==========================================
// 1. Header Component
// ==========================================
export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-2' : 'top-6'} px-4 flex justify-center`}>
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-sm">
          
          <Link 
            href="#home" 
            className="text-2xl font-bold tracking-wider flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)} // إغلاق القائمة لو ضغط على اللوجو
          >
            <span className="text-indigo-300">&lt;</span>M<span className="text-indigo-300">/&gt;</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link: NavLink) => (
              <Link key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            type="button"
            aria-label="Toggle Menu"
            // ضفنا p-2 لتكبير مساحة اللمس عشان صباع الإيد يلقطها بسهولة
            className="md:hidden text-white/80 hover:text-white transition-colors p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          // ضفنا cursor-pointer عشان يشتغل على الـ iOS، وضفنا h-[100dvh] لتغطية الشاشة بدقة
          className="fixed inset-0 z-40 bg-[#14005c]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden cursor-pointer h-dvh"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((link: NavLink) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={(e) => {
                e.stopPropagation(); // عشان نمنع تداخل الضغطة مع ضغطة الخلفية
                setIsMobileMenuOpen(false);
              }}
              // ضفنا p-4 عشان نكبر مساحة اللمس على الكلمة نفسها
              className="text-2xl font-bold text-white/90 hover:text-indigo-300 transition-colors p-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}