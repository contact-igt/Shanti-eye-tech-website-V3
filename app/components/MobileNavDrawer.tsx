"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "LASIK", href: "/services/lasik" },
    { label: "Cataract", href: "/services/cataract" },
    { label: "Retina", href: "/services/retina" },
    { label: "Contact", href: "/contact" },
  ];

  const drawerElement = isOpen && mounted ? (
    createPortal(
      <div className="mobile-drawer-overlay" onClick={() => setIsOpen(false)}>
        <div
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="mobile-drawer-header">
            <h2 className="mobile-drawer-title">Menu</h2>
            <button
              type="button"
              className="mobile-drawer-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Menu Items List */}
          <nav className="mobile-drawer-nav">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-drawer-link ${isActive ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="mobile-drawer-socials">
            <a
              href="https://www.facebook.com/shantieyetech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mobile-drawer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/shantieyetech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mobile-drawer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.7" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ShantieyetechbyDrAmitSolanki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="mobile-drawer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 12c0 3.4-.4 5.5-1 6.4-.7.9-2.3 1.1-8 1.1s-7.3-.2-8-1.1C3.4 17.5 3 15.4 3 12s.4-5.5 1-6.4C4.7 4.7 6.3 4.5 12 4.5s7.3.2 8 1.1c.6.9 1 3 1 6.4Z" />
                <path d="m10 8.7 5 3.3-5 3.3V8.7Z" fill="white" />
              </svg>
            </a>
          </div>

          {/* Call Now CTA */}
          <a
            href="tel:+919179191939"
            className="mobile-drawer-cta"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now: +91 91791 91939
          </a>
        </div>
      </div>,
      document.body
    )
  ) : null;

  return (
    <div className="mobile-nav-container">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        className="mobile-hamburger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H19M1 8H19M1 15H19"
            stroke="#0F172A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Portalled Drawer Overlay */}
      {drawerElement}
    </div>
  );
}
