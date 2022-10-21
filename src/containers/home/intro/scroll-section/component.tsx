import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

export interface ScrollSectionProps {
  step: number;
  animationStep: number;
}

const ScrollSection = ({ step, animationStep }: ScrollSectionProps) => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.5 });
  const setStep = useHomeStore((state) => state.setStep);
  const setAnimationStep = useHomeStore((state) => state.setAnimationStep);

  useEffect(() => {
    if (isInView) {
      setStep(step);
      setAnimationStep(animationStep);
    }
  }, [step, animationStep, setStep, setAnimationStep, isInView]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen pointer-events-none snap-start snap-always"
    />
  );
};

export default ScrollSection;
