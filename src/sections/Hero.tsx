import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    gsap.set(".hero__productImg", {
      xPercent: -50,
      yPercent: -75, // Keeps it higher up on the screen
      rotation: 12,
    });

    const tl = gsap.timeline({
      duration: 1,
      ease: "power2.inOut",
    });

    tl.from(".hero__productImg", {
      y: 750,
    })
      .from(
        ".hero__text--top",
        {
          y: -100,
          opacity: 0,
        },
        "<",
      )
      .from(
        ".hero__text--bottom",
        {
          y: 200,
          opacity: 0,
        },
        "<",
      );
  });
  return (
    <section className="relative border-2 min-h-svh flex justify-center items-center overflow-hidden">
      {/* --- Background Images --- */}
      <img
        src="/assets/hero-bg.PNG"
        alt="Hero Image"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <img
        src="/assets/hero-overlay.PNG"
        alt="Hero Image"
        className="absolute inset-0 object-cover w-full h-full z-40"
      />
      {/* --- Product Image --- */}
      <img
        src="/assets/hero-product.png"
        alt="Hero Image"
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
