'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface BaseProps {
  children: ReactNode;
  className?: string;
}

interface ParallaxSectionProps extends BaseProps {
  speed?: number;
}

interface ScrollFadeProps extends BaseProps {
  delay?: number;
}

interface HoverScaleProps extends BaseProps {
  scale?: number;
}

interface ImageParallaxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ParallaxSection = ({ children, className = "", speed = 0.5 }: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScrollFade = ({ children, className = "", delay = 0 }: ScrollFadeProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const HoverScale = ({ children, className = "", scale = 1.05 }: HoverScaleProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export const SmoothScroll = ({ children }: BaseProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#a9927d] origin-left z-50"
        style={{ scaleX }}
      />
      {children}
    </>
  );
};

export const TextReveal = ({ children, className = "" }: BaseProps) => {
  const words = (children as string).split(" ");
  
  return (
    <div className={className}>
      {words.map((word: string, i: number) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const ImageParallax = ({ src, alt, className = "" }: ImageParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className={`overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export const StickySection = ({ children, className = "" }: BaseProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={ref} className={`sticky top-0 h-screen ${className}`}>
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}; 