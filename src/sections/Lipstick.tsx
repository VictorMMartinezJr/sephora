import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Lipstick = () => {
  useGSAP(() => {
    gsap.from(".lipstick__img", {
      scrollTrigger: {
        trigger: "#lipstick__section",
        start: "top 50%",
        toggleActions: "play none none none",
        scroller: "#main-container",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
    });
  });
  return (
    <section
      id="lipstick__section"
      className="snap-start h-auto flex flex-col justify-center items-center overflow-hidden px-2 xl:px-0"
    >
      <img
        src="assets/lipstick.png"
        alt="lipstick"
        className="lipstick__img border-2 border-white rounded-2xl"
      />
    </section>
  );
};

export default Lipstick;
