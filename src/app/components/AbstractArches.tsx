import { motion, useScroll, useTransform } from "motion/react";

export function AbstractArches() {
  const { scrollYProgress } = useScroll();

  // Light angle changes as you scroll - simulates sun moving across the piece
  const lightAngle = useTransform(scrollYProgress, [0, 1], [120, 240]);
  const shadowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.6, 0.25]);
  const archOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.7, 0.7, 0.5]);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: archOpacity }}
    >
      {/* Large arch - bottom left */}
      <motion.div
        className="absolute -bottom-[30%] -left-[15%] w-[55vw] h-[55vw]"
        style={{
          rotate: lightAngle,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `linear-gradient(to bottom, 
              rgba(107, 124, 89, 0.2) 0%, 
              rgba(107, 124, 89, 0.12) 40%,
              rgba(107, 124, 89, 0.06) 70%,
              transparent 100%)`,
            transform: 'rotateZ(45deg)',
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `linear-gradient(135deg, 
              rgba(139, 126, 107, 0.15) 0%, 
              transparent 60%)`,
            filter: 'blur(50px)',
            opacity: shadowIntensity,
            transform: 'rotateZ(45deg)',
          }}
        />
      </motion.div>

      {/* Medium arch - top right */}
      <motion.div
        className="absolute -top-[25%] -right-[10%] w-[45vw] h-[45vw]"
        style={{
          rotate: useTransform(lightAngle, (val) => val - 90),
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '0 0 50% 50%',
            background: `linear-gradient(to top, 
              rgba(90, 74, 58, 0.15) 0%, 
              rgba(90, 74, 58, 0.08) 50%,
              transparent 100%)`,
            transform: 'rotateZ(-30deg)',
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            borderRadius: '0 0 50% 50%',
            background: `linear-gradient(225deg, 
              rgba(230, 220, 201, 0.18) 0%, 
              transparent 50%)`,
            filter: 'blur(60px)',
            opacity: useTransform(shadowIntensity, (val) => val * 0.9),
            transform: 'rotateZ(-30deg)',
          }}
        />
      </motion.div>

      {/* Small arch - center right */}
      <motion.div
        className="absolute top-[35%] right-[3%] w-[28vw] h-[28vw]"
        style={{
          rotate: useTransform(lightAngle, (val) => val + 45),
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `linear-gradient(to bottom, 
              rgba(107, 124, 89, 0.16) 0%, 
              rgba(107, 124, 89, 0.08) 50%,
              transparent 100%)`,
            transform: 'rotateZ(90deg)',
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `linear-gradient(315deg, 
              rgba(139, 126, 107, 0.12) 0%, 
              transparent 60%)`,
            filter: 'blur(35px)',
            opacity: shadowIntensity,
            transform: 'rotateZ(90deg)',
          }}
        />
      </motion.div>

      {/* Accent arch with subtle neon hint - middle left */}
      <motion.div
        className="absolute top-[20%] left-[5%] w-[35vw] h-[35vw]"
        style={{
          rotate: useTransform(lightAngle, (val) => val + 180),
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '0 50% 50% 0',
            background: `linear-gradient(to left, 
              rgba(255, 51, 102, 0.06) 0%, 
              rgba(255, 51, 102, 0.03) 40%,
              transparent 100%)`,
            transform: 'rotateZ(15deg)',
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            borderRadius: '0 50% 50% 0',
            background: `linear-gradient(45deg, 
              rgba(230, 220, 201, 0.1) 0%, 
              transparent 50%)`,
            filter: 'blur(70px)',
            opacity: useTransform(shadowIntensity, (val) => val * 0.6),
            transform: 'rotateZ(15deg)',
          }}
        />
      </motion.div>

      {/* Tiny accent - bottom right */}
      <motion.div
        className="absolute bottom-[15%] right-[12%] w-[22vw] h-[22vw]"
        style={{
          rotate: useTransform(lightAngle, (val) => val - 45),
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 0 0 50%',
            background: `linear-gradient(to right, 
              rgba(90, 74, 58, 0.12) 0%, 
              rgba(90, 74, 58, 0.06) 50%,
              transparent 100%)`,
            transform: 'rotateZ(-20deg)',
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 0 0 50%',
            background: `linear-gradient(180deg, 
              rgba(107, 124, 89, 0.1) 0%, 
              transparent 50%)`,
            filter: 'blur(30px)',
            opacity: useTransform(shadowIntensity, (val) => val * 0.8),
            transform: 'rotateZ(-20deg)',
          }}
        />
      </motion.div>

      {/* Additional arch for depth - top left */}
      <motion.div
        className="absolute top-[10%] left-[20%] w-[32vw] h-[32vw]"
        style={{
          rotate: useTransform(lightAngle, (val) => val + 120),
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `linear-gradient(to bottom, 
              rgba(139, 126, 107, 0.12) 0%, 
              rgba(139, 126, 107, 0.06) 50%,
              transparent 100%)`,
            transform: 'rotateZ(120deg)',
          }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            borderRadius: '50% 50% 0 0',
            background: `linear-gradient(90deg, 
              rgba(90, 74, 58, 0.08) 0%, 
              transparent 50%)`,
            filter: 'blur(40px)',
            opacity: useTransform(shadowIntensity, (val) => val * 0.7),
            transform: 'rotateZ(120deg)',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
