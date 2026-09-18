"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function getLocationHashTarget() {
  const hash = window.location.hash;
  if (!hash) return null;

  let id: string;
  try {
    id = decodeURIComponent(hash.slice(1));
  } catch {
    id = hash.slice(1);
  }

  return document.getElementById(id);
}

function scrollToLocationHash() {
  const target = getLocationHashTarget();
  if (!target) return;

  const scrollMarginTop = Number.parseFloat(
    window.getComputedStyle(target).scrollMarginTop,
  ) || 0;
  const targetTop = Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - scrollMarginTop,
  );
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  // Route changes can inherit the previous page's scroll position. Force the
  // requested anchor into place after the responsive layout has settled.
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, targetTop);
  root.style.scrollBehavior = previousScrollBehavior;
}

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
        const mark = (el: Element) => el.setAttribute("data-gsap-done", "1");

        // 1. Hero Sections (clip-reveal headline + calm rise for supporting copy)
        const heroHeadings = document.querySelectorAll(
          "section:first-of-type h1"
        );
        heroHeadings.forEach((h1) => {
          gsap.fromTo(
            h1,
            { clipPath: "inset(0 0 100% 0)", opacity: 0, y: 18 },
            {
              clipPath: "inset(0 0 0% 0)",
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power4.out",
            }
          );
          mark(h1);
        });

        const heroElements = document.querySelectorAll(
          "section:first-of-type .section-heading, section:first-of-type p, section:first-of-type .hero-buttons, section:first-of-type [class*='actions']"
        );
        if (heroElements.length > 0) {
          gsap.fromTo(
            heroElements,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              delay: 0.25,
              ease: "power3.out",
            }
          );
          heroElements.forEach(mark);
        }

        // Treatment-page hero banners paint their photo as a CSS background
        // (no <img> tag), so give the section itself a slow background-position
        // drift instead of a transform-based parallax.
        const bgHero = document.querySelector<HTMLElement>(
          "section:first-of-type[style*='background-image']"
        );
        if (bgHero) {
          gsap.fromTo(
            bgHero,
            { backgroundPositionY: "42%" },
            {
              backgroundPositionY: "58%",
              ease: "none",
              scrollTrigger: {
                trigger: bgHero,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        }

        // Slow parallax drift on hero imagery for depth. Scoped to
        // decorative photo wrappers/backgrounds only — NOT the whole hero
        // <section> itself (its class also contains "hero"), which would
        // otherwise sweep up every image in the hero, including foreground
        // portraits that already carry their own deliberate CSS transform
        // (e.g. DoctorHero's rotated/scaled portrait) and get clobbered.
        const heroMedia = document.querySelectorAll(
          "section:first-of-type [class*='hero']:not(section) img, section:first-of-type [class*='Hero']:not(section) img, section:first-of-type img[class*='Bg'], section:first-of-type img[class*='background']"
        );
        heroMedia.forEach((img) => {
          // Don't fight an image that already has its own intentional CSS
          // transform (rotation/scale baked into its layout).
          if (getComputedStyle(img).transform !== "none") return;
          gsap.fromTo(
            img,
            { yPercent: -6, scale: 1.08 },
            {
              yPercent: 6,
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("section") || img,
                start: "top top",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });

        // 2. Section Headings (Eyebrow, H2, Subtitle) — fade + gentle scale for depth
        const headings = document.querySelectorAll(
          "main section .section-heading, main section [class*='header'], main section [class*='Heading']"
        );
        headings.forEach((heading) => {
          gsap.fromTo(
            heading,
            { opacity: 0, y: 30, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
          mark(heading);
        });

        // 3. Grid Cards & Bento Cards (Staggered Entrance)
        const cardGrids = document.querySelectorAll(
          ".feature-grid, .service-grid, .philosophy-grid, .testimonial-grid, .grid, [class*='feature-grid'], [class*='cardGrid'], [class*='skeleton'], [class*='Grid'], [class*='grid']"
        );
        cardGrids.forEach((grid) => {
          const cards = grid.children;
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 40, scale: 0.96 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: grid,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
            mark(grid);
            Array.from(cards).forEach(mark);
          }
        });

        // 4. Large Images & Banners (directional wipe reveal, suits clinical/medical imagery)
        const images = document.querySelectorAll(
          ".wide-equipment, [class*='wide-equipment'], .doctor-photo img, .story-image img, [class*='mapCard'], .leadership-photo-wrap img, [class*='slide'] img, [class*='imageWrap'] img, [class*='imageStack'] img, [class*='isual'] img, [class*='portrait'] img, [class*='Portrait'] img, [class*='doctorWrap'] img"
        );
        images.forEach((img) => {
          // Skip images that already carry their own deliberate CSS
          // transform (rotated/scaled portraits) — animating scale here
          // would silently strip that authored transform.
          if (getComputedStyle(img).transform !== "none") return;
          gsap.fromTo(
            img,
            { clipPath: "inset(0 0 0 100%)", scale: 1.06 },
            {
              clipPath: "inset(0 0 0 0%)",
              scale: 1,
              duration: 1.1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
          mark(img);
        });

        // 4a. Eligibility / warning-sign checklists (treatment pages) — each
        // row ticks in left-to-right, reinforcing "read down this list".
        const checkLists = document.querySelectorAll(
          "ul[class*='hecks'], ul.check-list"
        );
        checkLists.forEach((list) => {
          const items = list.children;
          if (items.length > 0) {
            gsap.fromTo(
              items,
              { opacity: 0, x: -24 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.07,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: list,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
            mark(list);
            Array.from(items).forEach(mark);
          }
        });

        // 4c. Comparison tables (treatment pages: lens/procedure comparison
        // grids) — the whole table settles in, then each plan column lifts
        // in turn so the reader's eye moves left to right across options.
        const tableWraps = document.querySelectorAll("[class*='tableWrap'], .lens-comparison-wrap");
        tableWraps.forEach((wrap) => {
          gsap.fromTo(
            wrap,
            { opacity: 0, y: 30, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wrap,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
          const columns = wrap.querySelectorAll("[role='columnheader']");
          if (columns.length > 0) {
            gsap.fromTo(
              columns,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                delay: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: wrap,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
          mark(wrap);
        });

        // 4d. FAQ accordions (treatment pages + contact) — questions cascade
        // in rather than appearing as one flat block.
        const faqLists = document.querySelectorAll(
          "[class*='faqBox'], [class*='faq-list'], [class*='accordion']"
        );
        faqLists.forEach((box) => {
          const rows = box.children;
          if (rows.length > 0) {
            gsap.fromTo(
              rows,
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                stagger: 0.06,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: box,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
            mark(box);
            Array.from(rows).forEach(mark);
          }
        });

        // 4e. Appointment / booking CTA section (site-wide footer CTA before
        // the site Footer) — the copy column rises in, its bullet points /
        // check-badges cascade, and the form panel slides in from the side
        // with its fields staggering in turn instead of appearing flat.
        const appointmentSections = document.querySelectorAll(".appointment-section");
        appointmentSections.forEach((sec) => {
          const copyEls = sec.querySelectorAll(
            ".appointment-copy > .eyebrow, .appointment-copy > h2, .appointment-copy > p, .appointment-copy > [class*='actions']"
          );
          if (copyEls.length > 0) {
            gsap.fromTo(
              copyEls,
              { opacity: 0, y: 26 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: { trigger: sec, start: "top 80%", toggleActions: "play none none none" },
              }
            );
            copyEls.forEach(mark);
          }

          const points = sec.querySelectorAll(".appointment-points li");
          if (points.length > 0) {
            gsap.fromTo(
              points,
              { opacity: 0, x: -24 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: { trigger: sec, start: "top 78%", toggleActions: "play none none none" },
              }
            );
            points.forEach(mark);
          }

          const checkBadge = sec.querySelector(".cataract-journey-check, .small-check");
          if (checkBadge) {
            gsap.fromTo(
              checkBadge,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: { trigger: sec, start: "top 75%", toggleActions: "play none none none" },
              }
            );
            mark(checkBadge);
          }

          const form = sec.querySelector(".appointment-form");
          if (form) {
            gsap.fromTo(
              form,
              { opacity: 0, x: 40 },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: sec, start: "top 78%", toggleActions: "play none none none" },
              }
            );
            const fields = form.querySelectorAll(":scope > label, :scope > h3, :scope > button");
            gsap.fromTo(
              fields,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.07,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: { trigger: sec, start: "top 78%", toggleActions: "play none none none" },
              }
            );
            mark(form);
          }

          const journeyImage = sec.querySelector(".appointment-image, .cataract-journey-image-card");
          if (journeyImage) {
            gsap.fromTo(
              journeyImage,
              { opacity: 0, scale: 0.95 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: sec, start: "top 78%", toggleActions: "play none none none" },
              }
            );
            mark(journeyImage);
          }

          mark(sec);
        });

        // 4b. Timeline rows (About > Milestones) — year slides in from the
        // left, the card slides in from the right, each on its own trigger
        // so it plays as you reach that row rather than all at once.
        const timelineRows = document.querySelectorAll(".timeline article");
        timelineRows.forEach((row) => {
          const year = row.querySelector(":scope > b");
          const card = row.querySelector(":scope > div");
          if (year) {
            gsap.fromTo(
              year,
              { opacity: 0, x: -60 },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 82%",
                  toggleActions: "play none none none",
                },
              }
            );
            mark(year);
          }
          if (card) {
            gsap.fromTo(
              card,
              { opacity: 0, x: 60 },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 82%",
                  toggleActions: "play none none none",
                },
              }
            );
            mark(card);
          }
          mark(row);
        });

        // 5. Number Stats & Highlights — calm rise with a soft settle, no cartoon bounce.
        // Grouped by parent so unrelated stat blocks in different sections
        // (hero stats, leadership stats, impact band…) each get their own trigger.
        const statBoxes = document.querySelectorAll(
          ".number-card, .doctor-stats div, .impact-band b, [class*='metrics'] div, .leadership-stats article, .photo-stats div"
        );
        const statGroups = new Map<Element, Element[]>();
        statBoxes.forEach((box) => {
          const parent = box.parentElement || box;
          const group = statGroups.get(parent) || [];
          group.push(box);
          statGroups.set(parent, group);
        });
        statGroups.forEach((group, parent) => {
          gsap.fromTo(
            group,
            { opacity: 0, y: 24, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: "back.out(1.15)",
              scrollTrigger: {
                trigger: parent,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
          group.forEach(mark);
        });

        // 6. Catch-all — every remaining section (blogs, contact, doctors, FAQs, etc.)
        // that rules 1-5 didn't already touch gets a proper reveal instead of
        // rendering statically. Direct children are staggered for depth when
        // there are a handful of them (list items, cards, FAQ rows, columns).
        const allSections = document.querySelectorAll("main section");
        allSections.forEach((sec) => {
          const alreadyHandled = sec.querySelector("[data-gsap-done]");
          const children = Array.from(sec.children).filter(
            (c) => !c.hasAttribute("data-gsap-done") && !c.querySelector("[data-gsap-done]")
          );

          if (!alreadyHandled) {
            gsap.fromTo(
              sec,
              { opacity: 0, y: 34 },
              {
                opacity: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 87%",
                  toggleActions: "play none none none",
                },
              }
            );
            return;
          }

          // Section had some handled elements (e.g. a heading) but leftover
          // unmarked children (list items, FAQ rows, misc blocks) — give
          // those a subtle staggered lift so nothing pops in flat.
          if (children.length > 1 && children.length <= 12) {
            gsap.fromTo(
              children,
              { opacity: 0, y: 22 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: sec,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
      });

      // -------------------------------------------------------------
      // MOBILE ANIMATION PARADIGM (max-width: 768px)
      // -------------------------------------------------------------
      mm.add("(max-width: 768px)", () => {
        // Fast, subtle fade-in for mobile to ensure high performance
        const mobileSections = document.querySelectorAll("main section");
        const hashTarget = getLocationHashTarget();
        mobileSections.forEach((sec) => {
          // The requested destination must not move after hash positioning.
          if (hashTarget && sec.contains(hashTarget)) {
            gsap.set(sec, { opacity: 1, y: 0 });
            return;
          }

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

        // Cards whose desktop design is a ":hover" gradient/lift have no
        // real hover to "leave" on touch — a tap just leaves them stuck lit
        // up. On mobile, exactly ONE card is lit at a time: the furthest-
        // down card that's currently *fully* on screen — so the first card
        // lights up the moment it fully enters, and each next card takes
        // over the moment IT fully enters, in order.
        //
        // This is deliberately a plain native `scroll` listener recomputing
        // getBoundingClientRect on every tick, not a GSAP ScrollTrigger
        // enter/leave callback — a handful of different ScrollTrigger
        // configurations (progress ratio, zero-width point trigger, ranged
        // trigger) all proved unreliable here. A native scroll listener is
        // stateless (recomputed fresh from current geometry every time, so
        // there's nothing to drift or miss) and is guaranteed to fire on
        // every real scroll in every browser. Covers About > Philosophy's
        // Mission/Vision/Values plus any card opted in via
        // `data-scroll-active-card` (e.g. Services > Why Choose Us).
        const scrollActiveCards = document.querySelectorAll<HTMLElement>(
          ".philosophy-section .philosophy-card, [data-scroll-active-card]"
        );
        const scrollActiveGroups = new Map<Element, HTMLElement[]>();
        scrollActiveCards.forEach((card) => {
          const parent = card.parentElement || card;
          const group = scrollActiveGroups.get(parent) || [];
          group.push(card);
          scrollActiveGroups.set(parent, group);
        });
        const scrollActiveCleanups: (() => void)[] = [];
        scrollActiveGroups.forEach((group) => {
          let ticking = false;
          const recompute = () => {
            ticking = false;
            let winner: HTMLElement | null = null;
            group.forEach((card) => {
              const rect = card.getBoundingClientRect();
              const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
              if (fullyVisible) winner = card;
            });
            group.forEach((card) => card.classList.toggle("is-active", card === winner));
          };
          const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(recompute);
          };
          recompute();
          window.addEventListener("scroll", onScroll, { passive: true });
          window.addEventListener("resize", onScroll);
          scrollActiveCleanups.push(() => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
          });
        });

        return () => {
          scrollActiveCleanups.forEach((cleanup) => cleanup());
        };
      });

      // Refresh ScrollTrigger after elements are calculated
      ScrollTrigger.refresh();
      scrollToLocationHash();
    }, 100);

    // Next.js may attempt hash scrolling while the mobile drawer still has
    // body scrolling locked. A second pass removes that route-change race.
    const hashCorrectionTimer = setTimeout(scrollToLocationHash, 250);

    const handleHashChange = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToLocationHash);
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      clearTimeout(timer);
      clearTimeout(hashCorrectionTimer);
      window.removeEventListener("hashchange", handleHashChange);
      mm.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
