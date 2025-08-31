'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
    {title: "About", path:"#about"},
    {title: "Projects", path:"projects"},
    {title: "Contact", path:"#contact"},
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] =  useState(false);

    return(
        <nav className="fixed w-full bg-black/80 backdrop-blur-sm border-b border-blue-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-yellow-400 font-star-wars">
                Shardendu Mishra
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/#about" className="text-blue-300 hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-blue-300 hover:text-yellow-400 transition-colors">
                Projects
              </Link>
              <Link href="/#skills" className="text-blue-300 hover:text-yellow-400 transition-colors">
                Skills
              </Link>
              <Link href="/#contact" className="text-blue-300 hover:text-yellow-400 transition-colors">
                Contact
              </Link>

            </div>
          </div>
        </div>
      </nav>

    )
}

export default Navbar;