"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Register ScrollTrigger plugin safely on client
    gsap.registerPlugin(ScrollTrigger);

    // Create matchMedia instance for clean responsive motion
    const mm = gsap.matchMedia();

    // Small delay to ensure Next.js DOM has mounted page components
    const timer = setTimeout(() => {
      // -------------------------------------------------------------
      // DESKTOP & TABLET ANIMATION PARADIGM (min-width: 769px)
      // -------------------------------------------------------------
      mm.add("(min-width: 769px)", () => {
        // 1. Hero Sections (Fade & rise staggered)
        const heroElements = document.querySelectorAll(
          "section:first-of-type .section-heading, section:first-of-type h1, section:first-of-type p, section:first-of-type .hero-buttons, section:first-of-type [class*='actions']"
        );
        if (heroElements.length > 0) {
          gsap.fromTo(
            heroElements,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
            }
          );
        }

        // 2. Section Headings (Eyebrow, H2, Subtitle)
        const headings = document.querySelectorAll(
          "main section .section-heading, main section [class*='header']"
        );
        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // 3. Grid Cards & Bento Cards (Staggered Entrance)
        const cardGrids = document.querySelectorAll(
          ".feature-grid, .service-grid, .philosophy-grid, .testimonial-grid, .grid, [class*='feature-grid'], [class*='cardGrid']"
        );
        cardGrids.forEach((grid) => {
          const cards = grid.children;
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 36, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.75,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: grid,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });

        // 4. Large Images & Banners (Scale reveal)
        const images = document.querySelectorAll(
          ".wide-equipment, [class*='wide-equipment'], .doctor-photo img, .story-image img, [class*='mapCard']"
        );
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { opacity: 0.3, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // 5. Number Stats & Highlights
        const statBoxes = document.querySelectorAll(
          ".number-card, .doctor-stats div, .impact-band b, [class*='metrics'] div"
        );
        if (statBoxes.length > 0) {
          gsap.fromTo(
            statBoxes,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: statBoxes[0]?.parentElement || statBoxes[0],
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // -------------------------------------------------------------
      // MOBILE ANIMATION PARADIGM (max-width: 768px)
      // -------------------------------------------------------------
      mm.add("(max-width: 768px)", () => {
        // Fast, subtle fade-in for mobile to ensure high performance
        const mobileSections = document.querySelectorAll("main section");
        mobileSections.forEach((sec) => {
          gsap.fromTo(
            sec,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 92%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      // Refresh ScrollTrigger after elements are calculated
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
