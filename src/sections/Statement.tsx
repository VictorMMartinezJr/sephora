import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const Statement = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#statement__section",
        start: "top 50%",
        toggleActions: "play none none none",
        scroller: "#main-container",
      },
    });

    tl.from(".statement__h2--1", {
      y: 100,
      opacity: 0,
    })
      .from(
        ".statement__images",
        {
          x: 100,
          opacity: 0,
        },
        "<",
      )
      .from(
        ".statement__onlyatsephora",
        {
          x: -100,
          opacity: 0,
        },
        "<",
      )
      .from(
        ".statement__h2--2",
        {
          x: -100,
          opacity: 0,
        },
        "<",
      )
      .from(
        ".statement__cta",
        {
          opacity: 0,
        },
        "<",
      );
  });

  return (
    <section
      id="statement__section"
      className="snap-start relative min-h-dvh flex flex-col justify-center items-center text-rose-950 gap-5"
    >
      {/* --- Text --- */}
      <div className="h-auto tracking-tighter text-center flex flex-col justify-center items-center text-4xl xs:text-5xl sm:text-6xl xl:text-8xl font-bold">
        <h2 className="statement__h2--1">
          RENERGIE
          <br />
          LIFTING ROUTINE.
        </h2>
        <h2 className="statement__h2--2 text-left italic font-semibold transform translate-x-15 lg:translate-x-50 text-5xl xs:text-6xl sm:text-7xl lg:text-9xl 2xl:text-[10rem]">
          Hide
          <br />
          <span className="not-italic font-bold">NOTHING.</span>
        </h2>
      </div>

      {/* --- Images --- */}
      <div className="statement__images absolute top-2 xs:top-10 right-5 2xl:right-50">
        <div className="relative w-50 sm:w-90 h-50 sm:h-70">
          <img
            src="assets/statement-1.jpg"
            className="absolute left-0 bottom-0 w-30 sm:w-50 h-30 sm:h-50 -rotate-12 object-cover border-2 border-white z-10"
          />
          <img
            src="assets/statement-2.jpg"
            className="absolute right-0 w-30 sm:w-50 h-30 sm:h-50 object-cover border-2 border-white z-20"
          />
        </div>
      </div>

      {/* --- Only at Sephora --- */}
      <div className="statement__onlyatsephora absolute bottom-20 2xl:bottom-50 left-5 xl:left-50 text-center flex flex-col justify-center items-center gap-2">
        <div className="bg-white rounded-full p-4 w-20 lg:w-40 h-20 lg:h-40 flex justify-center items-center">
          <h2 className="bg-black rounded-full font-bold p-4 text-white w-15 lg:w-30 h-15 lg:h-30 flex justify-center items-center lg:text-2xl">
            ONLY
          </h2>
        </div>

        <h2 className="font-semibold lg:text-2xl">AT SEPHORA</h2>
        <HiMiniArrowTrendingUp className="w-12 lg:w-16 h-12 lg:h-16" />
      </div>

      {/* --- CTA button --- */}
      <button className="statement__cta border border-rose-950 font-bold py-2 px-6 sm:px-10 rounded-md hover:bg-white/30 cursor-pointer transition-colors sm:text-2xl lg:text-3xl">
        SHOP NOW
      </button>
    </section>
  );
};

export default Statement;
