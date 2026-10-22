import { useEffect } from "react";
import { capture } from "./config.js";

const targets = [
  "[data-reveal='image']",
  "h1",
  "h2",
  ".heading-aside",
  ".intro-copy",
  ".villa-feature-details",
  ".dining-heading > p",
  ".wellness-copy > p",
  ".faq-list details",
  ".stay-banner > div",
  ".venue-row > div",
  ".contact-form",
  ".contact-details",
  ".page-intro .lead",
  ".offer-card > p:not(.eyebrow)",
  ".editorial-card > p:not(.eyebrow)",
].join(",");

export function usePageMotion(root, route) {
  useEffect(() => {
    const page = root.current;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (capture || !page || !window.IntersectionObserver) return;
    const seen = new WeakSet();
    const running = new Set();
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
    let frame;
    const animate = (element, frames, duration, delay = 0) => {
      const animation = element.animate(frames, { duration, delay, easing });
      running.add(animation);
      animation.finished
        .catch(() => {})
        .finally(() => running.delete(animation));
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach(({ target }, i) => {
            observer.unobserve(target);
            if (preference.matches || target.contains(document.activeElement))
              return;
            const delay = Math.min(i * 65, 130);
            if (target.matches(".photo")) {
              const image = target.querySelector("img");
              const shutter = target.querySelector(".photo-shutter");
              if (image)
                animate(
                  image,
                  [{ transform: "scale(1.09)" }, { transform: "scale(1)" }],
                  1100,
                  delay,
                );
              if (shutter)
                animate(
                  shutter,
                  [
                    { transform: "translateY(0)" },
                    { transform: "translateY(-101%)" },
                  ],
                  850,
                  delay,
                );
            } else {
              animate(
                target,
                [
                  { opacity: 0, transform: "translateY(26px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
                700,
                delay,
              );
            }
          });
      },
      { threshold: 0.06 },
    );
    const observe = () => {
      if (preference.matches) return;
      page.querySelectorAll(targets).forEach((element) => {
        if (
          seen.has(element) ||
          element.closest(".hero-photo,.villa-neighbour") ||
          element.parentElement?.closest(targets)
        )
          return;
        seen.add(element);
        observer.observe(element);
      });
    };
    const stop = () => {
      running.forEach((animation) => animation.cancel());
      observer.disconnect();
      if (!preference.matches) observe();
    };
    const revealFocus = (event) => {
      // A keyboard target must never wait behind a scroll entrance.
      running.forEach((animation) => {
        const target = animation.effect?.target;
        if (target?.contains(event.target) || event.target.contains(target))
          animation.cancel();
      });
    };
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(observe);
    });
    observe();
    mutations.observe(page, { childList: true, subtree: true });
    preference.addEventListener("change", stop);
    page.addEventListener("focusin", revealFocus);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      mutations.disconnect();
      running.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
      page.removeEventListener("focusin", revealFocus);
    };
  }, [root, route]);
}
