import { useMediaQuery } from 'react-responsive';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { loadExternalRemoveInteraction } from "tsparticles-interaction-external-remove";

export default function ParticleNetwork() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const init = async (engine) => {
    await loadSlim(engine);
    await loadExternalRemoveInteraction(engine);
  };

  const particleOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: !isMobile, 
          mode: "push",
        },
      },
      modes: {
        remove: {
          quantity: 4, 
        },
        push: {
          quantity: 2, 
        },
      },
    },
    particles: {
      number: { 
        value: isMobile ? 40 : 80, 
        limit: isMobile ? 60 : 120,
      },
      color: { value: "#ffffff" },
      links: {
        enable: true,
        color: "#ffffff",
        distance: isMobile ? 120 : 160,
      },
      move: {
        enable: true,
        speed: isMobile ? 1 : 2,
      },
    },
  };

  return (
    <Particles
      className="fixed w-full h-full -z-10"
      init={init}
      options={particleOptions}
    />
  );
}