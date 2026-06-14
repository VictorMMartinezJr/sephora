import { useGSAP } from "@gsap/react";
import { REVIEWS_DATA } from "../constants";
import { FaStar } from "react-icons/fa";
import gsap from "gsap/all";

const Reviews = () => {
  useGSAP(() => {
    gsap.from(".review-card", {
      scrollTrigger: {
        trigger: "#reviews__section",
        start: "top 50%",
        toggleActions: "play none none none",
        scroller: "#main-container",
      },
      opacity: 0,

      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    });
  });

  return (
    <section
      id="reviews__section"
      className="border-2 snap-start min-screen-height flex flex-col justify-center items-center overflow-hidden"
    >
      {/* --- Title --- */}
      <div className="products__header text-center flex flex-col flex-0 justify-center items-center gap-1 ">
        <h3 className="text-xl xl:text-2xl font-bold text-pink-700">
          TESTIMONIALS
        </h3>
        <h2 className="text-4xl xs:text-5xl sm:text-6xl xl:text-8xl font-bold text-rose-950 mb-8 tracking-tighter">
          WHAT OUR CUSTOMERS SAY
        </h2>
      </div>

      <div className="xl:w-full xl:grid xl:grid-cols-2">
        {REVIEWS_DATA.map((review, i) => (
          <div
            key={i}
            className={`review-card group bg-white/40 lg:bg-transparent flex flex-col lg:flex-row gap-2 m-2 p-2 lg:items-center xl:cursor-pointer ${review.positionX} ${review.positionY}`}
          >
            {/* --- Image --- */}
            <img
              src={review.imgURL}
              alt="Customer"
              className="w-15 lg:w-30 h-15 lg:h-30 object-cover rounded-full border-2 border-white xl:group-hover:scale-110 transition-transform"
            />
            <div className="flex flex-col gap-1 lg:bg-white/80 p-2 rounded-2xl xl:opacity-0 xl:group-hover:opacity-100 xl:group-hover:z-30 transition-opacity duration-300">
              {/* --- Stars --- */}
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* --- Review & Name --- */}
              <p className="text-gray-600 leading-tight lg:max-w-100">
                {review.review}
              </p>
              <p className="text-rose-950 font-bold text-lg">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
