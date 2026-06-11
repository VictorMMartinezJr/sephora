import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  const isLargeDesktop = useMediaQuery({
    query: "(min-width: 1536px)",
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
    });

    // --- The Intro Animation (Plays immediately on load) ---
    tl.from("#nav", { y: -100 })
      .fromTo(
        ".hero__productImg",
        {
          y: 750,
          rotation: 12,
          xPercent: -50,
          yPercent: -75,
          autoAlpha: 0, // Starts completely hidden
        },
        {
          y: 0,
          autoAlpha: 1, // automatically switches visibility to 'visible'
        },
        "<",
      )
      .from(".hero__text--top", { y: -100, opacity: 0 }, "<")
      .from(".hero__text--bottom", { y: 200, opacity: 0 }, "<");

    // --- The Scroll Transition (Linked strictly to scrolling) ---
    gsap.fromTo(
      ".hero__productImg",
      {
        y: 0,
        scale: 1,
        rotation: 12,
        autoAlpha: 1,
      },
      {
        scrollTrigger: {
          trigger: ".hero__section",
          scroller: "#main-container",
          start: "50%",
          toggleActions: isMobile
            ? "play none reverse reset"
            : "play none reverse none",
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: "90vh",
        x: isLargeDesktop ? "-70%" : "-60%",
        scale: isLargeDesktop ? 0.8 : 0.6,
        rotation: -12,
        zIndex: 50,
      },
    );
  });

  return (
    <section className="hero__section relative snap-start h-screen flex justify-center items-center">
      {/* --- Background Images --- */}
      <img
        src="/assets/hero-bg.PNG"
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <img
        src="/assets/hero-overlay.PNG"
        alt="Hero Overlay"
        className="absolute inset-0 object-cover w-full h-full z-40"
      />

      {/* --- Product Image --- */}
      {/* ⭐ Added style={{ visibility: "hidden" }} and removed opacity-0 */}
      <img
        src="/assets/hero-product.png"
        alt="Hero Product"
        style={{ visibility: "hidden" }}
        className="hero__productImg absolute top-3/4 left-1/2 object-contain w-64 sm:w-100 lg:w-150 z-30"
      />

      {/* --- Text Content --- */}
      <div className="relative text-center translate-y-15 xs:translate-y-20 2xl:translate-y-30 z-10">
        <h1 className="hero__text--top text-5xl sm:text-8xl lg:text-[10rem] 2xl:text-[15rem] text-white font-bold [word-spacing:3.8rem] xs:[word-spacing:5rem] whitespace-nowrap">
          CLEAR SKIN <br />
          <span className="hero__text--bottom inline-block">PURE GLOW</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
