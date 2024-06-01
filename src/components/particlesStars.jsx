import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const ParticlesStars = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
            parallax: { enable: true, force: 60, smooth: 10 },
          },
          resize: true,
        },
        modes: {
          grab: { distance: 400 },
        },
      },
      particles: {
        color: {
          value: "#263238",
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: "none",
          enable: true,
          out_mode: "out",
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
          random: false,
          value: 0.5,
        },
        shape: {
          type: ["star", "circle"],
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      fullScreen: { enable: false },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="particles-container"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesStars;
