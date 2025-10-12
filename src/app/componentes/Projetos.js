import { useState, useRef, useEffect } from "react";
import items from "../data/Items";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "../animations/Carousel";
import AnimatedContent from "../animations/AnimatedContent";
import Image from "next/image";

const Projetos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Calcula offset para centralizar o item atual
  const getTranslateX = () => {
    const itemWidth = 15 * 16; // 240px
    const gap = 2.5 * 16; // 40px
    if (!containerWidth) return 0;

    // Posicionamento inicial do primeiro item
    const startOffset = (containerWidth - itemWidth) / 2;

    // Deslocamento adicional pelos itens anteriores
    const shift = currentIndex * (itemWidth + gap);

    // Offset final para aplicar no translateX
    return startOffset - shift;
  };

  return (
    <div className="w-screen h-screen mt-15 text-center flex flex-col justify-center items-center overflow-hidden">
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={true}
        duration={1.2}
        initialOpacity={0}
        animateOpacity={true}
        scale={1}
        threshold={0.2}
        delay={0.4}
      >
        <div>
          <h1 className="text-white text-3xl mt-6">PROJETOS</h1>
        </div>
      </AnimatedContent>

      <div className="hidden lg:flex items-center justify-center">
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.8}
        >
          <div>
            <button
              onClick={goToPrevious}
              className="text-white p-2 border-2 border-white rounded-full cursor-pointer z-20"
              aria-label="Projeto anterior"
            >
              <ChevronLeft />
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={1.2}
        >
          <div
            ref={containerRef}
            className="overflow-hidden mx-3 flex items-center justify-start"
            style={{ width: "60rem", height: "25rem" }}
          >
            <div
              className="flex gap-10 transition-transform duration-300"
              style={{ transform: `translateX(${getTranslateX()}px)` }}
            >
              {items.map((item, index) => (
                <a
                  href={item.url}
                  key={item.id}
                  target="_blank"
                  className={`bg-[#47434379] w-[15rem] h-[17rem] rounded-3xl p-3 flex flex-col items-center flex-shrink-0 transition-all duration-300 ${
                    currentIndex === index
                      ? "scale-110 z-10 opacity-100 shadow-lg"
                      : "scale-100 opacity-70"
                  }`}
                >
                  <Image
                    width={400}
                    height={400}
                    src={item.img}
                    alt={item.title}
                    className="w-[12rem] object-contain"
                  />
                  <h1 className="text-white text-2xl p-3">{item.title}</h1>
                </a>
              ))}
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.8}
        >
          <div>
            <button
              onClick={goToNext}
              className="text-white p-2 border-2 border-white rounded-full cursor-pointer z-20"
              aria-label="Próximo projeto"
            >
              <ChevronRight />
            </button>
          </div>
        </AnimatedContent>
      </div>
      {/* Mobile version */}

      <div className="lg:hidden ">
        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.8}
        >
          <div style={{ height: "400px", position: "relative" }}>
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Projetos;
