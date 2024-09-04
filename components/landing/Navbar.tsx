import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuOpen1, setIsMenuOpen1] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuRef1 = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (
        menuRef1.current &&
        !menuRef1.current.contains(event.target as Node)
      ) {
        setIsMenuOpen1(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex h-20 items-center justify-between bg-[#F3F3F3]  mx-auto sm:px-20 px-10 md:px-20">
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
          <nav className="space-y-2">
            <a
              href="/"
              className="block text-base text-black hover:text-gray-700"
            >
              Home
            </a>
            <a
              href="/community-forum"
              className="block text-base text-black hover:text-gray-700"
            >
              Community Forum
            </a>
            {/* Add more links as needed */}
          </nav>
        </div>
      </div>

      <div className="hidden items-center space-x-5 md:flex">
        <nav>
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex space-x-8">
              <Link
                href="/"
                className="text-primary font-semibold hover:text-[#26A151] dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/fpo"
                className="text-gray-600 hover:text-[#26A151] dark:text-gray-400 dark:hover:text-white"
              >
                FPO
              </Link>
              <Link
                href="/farmers"
                className="text-gray-600 hover:text-[#26A151] dark:text-gray-400 dark:hover:text-white"
              >
                Farmers
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-[#26A151] dark:text-gray-400 dark:hover:text-white"
              >
                About Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
