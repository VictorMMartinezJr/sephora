import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { productData } from "../constants";
import Product from "../components/Product";

const Products = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#products__section",
        start: "top 50%",
        toggleActions: "play none none none",
        scroller: "#main-container",
      },
    });

    tl.from(".carousel", {
      opacity: 0,
    }).from(
      ".products__header",
      {
        y: -50,
        opacity: 0,
      },
      "<",
    );
  });

  return (
    <section
      id="products__section"
      className="snap-start h-auto flex flex-col justify-center items-center overflow-hidden"
    >
      {/* --- Title --- */}
      <div className="products__header text-center flex flex-col justify-center items-center gap-1 ">
        <h3 className="text-xl xl:text-2xl font-bold text-pink-700">
          NEW. NEED. NOW
        </h3>
        <h2 className="text-4xl xs:text-5xl sm:text-6xl xl:text-8xl font-bold text-rose-950 mb-8 tracking-tighter">
          OUR PRODUCTS
        </h2>
      </div>

      {/* --- Carousel --- */}
      <div className="carousel w-full">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          grabCursor={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          spaceBetween={30}
          breakpoints={{
            300: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          className="product-swiper"
        >
          {productData.map((product, i) => (
            <SwiperSlide key={i}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
