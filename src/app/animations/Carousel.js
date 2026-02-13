import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, motionValue } from "framer-motion";
import Image from "next/image";

const DEFAULT_ITEMS = [
  {
    title: "WePet",
    id: 1,
    href: "https://wepet-adocao.netlify.app/",
    img: "/assets/we-pet.png",
  },
  {
    title: "VelocExpress",
    id: 2,
    href: "https://velocexpress.netlify.app/",
    img: "/assets/VelocExpress.png",
  },
  {
    title: "Burger Prime",
    id: 3,
    href: "https://burger-prime.netlify.app/",
    img: "/assets/BurgerPrime.png",
  },
  {
    title: "Site de convite de casamento",
    id: 4,
    href: "https://convite-de-casamento-site.netlify.app",
    img: "/assets/Convite.png",
  },
  {
    title: "Calculadora web responsiva",
    id: 5,
    href: "https://calculadora-web-responsiva.netlify.app",
    img: "/assets/calculadora-web.png",
  },
  {
    title: "Conversor de binario para decimal",
    id: 6,
    href: "https://bin-dec-converter.netlify.app",
    img: "/assets/bin2dec.png",
  },
  {
    title: "Visualizador de borda css",
    id: 7,
    href: "https://visualizador-de-borda.netlify.app",
    img: "/assets/bordaCss.png",
  },
  {
    title: "Luzes de natal",
    id: 8,
    href: "https://luzes-natal.netlify.app",
    img: "/assets/luzesdeNatal.png",
  },
  {
    title: "Gerenciador de tarefas",
    id: 9,
    href: "https://gerenciadordetarefas17.netlify.app",
    img: "/assets/Gerenciador-Tarefas.png",
  },
  {
    title: "Gerador de cores hexadecimal",
    id: 10,
    href: "https://geradordecoreshexadecimal.netlify.app",
    img: "/assets/Gerador-Cores.png",
  },
  {
    title: "Gerenciamento de projetos e tarefas",
    id: 11,
    href: "https://taskflow1708.netlify.app/login",
    img: "/assets/TaskFlow.png",
  },
  {
    title: "Jogo mobile LoveGuess",
    id: 12,
    href: "https://github.com/Alefk1708/LoveGuess/releases",
    img: "/assets/LoveGuess.jpg",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

function lerp(a, b, t) {
  return a + (b - a) * t;
}
function piecewiseInterp(x, x0, x1, x2, y0, y1, y2) {
  if (x <= x0) return y0;
  if (x >= x2) return y2;
  if (x >= x0 && x <= x1) {
    const t = (x - x0) / (x1 - x0 || 1);
    return lerp(y0, y1, t);
  }
  const t = (x - x1) / (x2 - x1 || 1);
  return lerp(y1, y2, t);
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const rotateYsRef = useRef([]); // armazenará MotionValues derivados
  const subscriptionRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  // ---------- CRIA/REUSA MotionValues derivados e assina x.onChange ----------
  useEffect(() => {
    // garantir que existam MotionValues suficientes (reusar se já existirem)
    rotateYsRef.current = carouselItems.map(
      (_, i) => rotateYsRef.current[i] ?? motionValue(0)
    );

    // limpeza de subscription antiga (se existir)
    if (subscriptionRef.current) {
      subscriptionRef.current();
      subscriptionRef.current = null;
    }

    // função que atualiza todos os rotateYs com base no x atual
    const updateAll = (latestX) => {
      rotateYsRef.current.forEach((mv, index) => {
        const x0 = -(index + 1) * trackItemOffset;
        const x1 = -index * trackItemOffset;
        const x2 = -(index - 1) * trackItemOffset;
        const angle = piecewiseInterp(latestX, x0, x1, x2, 90, 0, -90);
        mv.set(angle); // setar número (graus) - o Motion aceita número pra rotações
      });
    };

    // atualizar inicialmente com o valor atual de x
    updateAll(x.get());

    // inscrever-se nas mudanças de x (retorna função de unsubscribe)
    subscriptionRef.current = x.onChange(updateAll);

    // cleanup
    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current();
        subscriptionRef.current = null;
      }
    };
  }, [carouselItems.length, trackItemOffset, x]);

  // --------------------------- JSX ---------------------------
  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full border border-white"
          : "rounded-[24px] border border-[#222]"
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            currentIndex * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => (
          <motion.a
            key={item.id + "-" + index}
            href={item.href}
            className={`relative shrink-0 flex flex-col ${
              round
                ? "items-center justify-center text-center bg-[#060606] border-0"
                : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
            } overflow-hidden cursor-grab active:cursor-grabbing`}
            style={{
              width: itemWidth,
              height: round ? itemWidth : "100%",
              // aqui usamos o MotionValue armazenado no rotateYsRef
              rotateY: rotateYsRef.current[index],
              transformPerspective: 1000,
              ...(round && { borderRadius: "50%" }),
            }}
            transition={effectiveTransition}
          >
            <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
              <Image
                width={itemWidth}
                height={itemWidth}
                className="rounded-3xl"
                src={`${item.img}`}
                alt="Imagem dos slides"
              />
            </div>
            <div className="p-5">
              <div className="mb-1 font-black text-lg text-white">
                {item.title}
              </div>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                  ? "bg-[#555]"
                  : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
