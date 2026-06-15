import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { BRANDS_DATA } from "../constants";

const FeaturedBrands = () => {
  useGSAP(() => {
    gsap.from("#featuredBrands__section", {
      scrollTrigger: {
        trigger: "#featuredBrands__section",
        start: "top 80%",
        toggleActions: "play none none none",
        scroller: "#main-container",
      },
      opacity: 0,
      y: 50,

      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
    });
  });
  return (
    <section
      id="featuredBrands__section"
      className="my-18 xl:my-36 snap-start min-screen-height flex flex-col justify-center items-center overflow-hidden"
    >
      {/* --- Title --- */}

      <h2 className="featuredBrands__h2 text-4xl xs:text-5xl sm:text-6xl xl:text-8xl font-bold text-rose-950 mb-8 tracking-tighter">
        FEATURED BRANDS
      </h2>
      {/* --- Carousel --- */}
      <div className="carousel w-3/4">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          grabCursor={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          spaceBetween={30}
          breakpoints={{
            300: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="product-swiper"
        >
          {BRANDS_DATA.map((brand, i) => (
            <SwiperSlide key={i}>
              <img
                src={brand.imgSrc}
                alt={brand.alt}
                className="opacity-20 h-40 w-40 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedBrands;
