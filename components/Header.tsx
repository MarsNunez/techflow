'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          TechFlow
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-blue-200 transition">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-blue-200 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/galeria" className="hover:text-blue-200 transition">
              Galería
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-blue-200 transition">
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/admin" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-400 transition">
              Admin
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-blue-700 flex flex-col gap-4 p-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" onClick={() => setIsOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" onClick={() => setIsOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/galeria" onClick={() => setIsOpen(false)}>
                Galería
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/admin" onClick={() => setIsOpen(false)}>
                Admin
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
