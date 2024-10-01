'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/know-more', label: 'Know More' },
  { href: '/farmers', label: 'Farmers' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setIsVisible(false);
        } else { // if scroll up show the navbar
          setIsVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex h-20 items-center justify-between bg-[#F3F3F3] mx-auto sm:px-20 px-10 md:px-20">
        <Image src="/logo1.svg" width={150} height={150} alt={"logo"} />

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMobileMenu}
        >
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white p-4">
            <button
              onClick={toggleMobileMenu}
              className="mb-4 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base ${
                    pathname === link.href
                      ? 'font-bold text-[#26A151]'
                      : 'text-black hover:text-[#26A151]'
                  }`}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="hidden items-center space-x-5 md:flex">
          <nav>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? 'font-bold text-[#26A151]'
                        : 'text-gray-600 hover:text-[#26A151] dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);