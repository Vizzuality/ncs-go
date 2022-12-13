import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Section = 'intro' | 'header' | 'about' | 'stories' | 'featured-science' | 'subscribe';

type HomeState = {
  section: Section;
  setSection: (section: Section) => void;

  step: number;
  setStep: (step: number) => void;
  animationStep: number;
  setAnimationStep: (step: number) => void;

  header: boolean;
  setHeader: (header: boolean) => void;
};

const useHomeStore = create<HomeState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    section: 'intro',
    setSection: (section) => set(() => ({ section })),

    step: 5,
    setStep: (step) => set(() => ({ step: step })),
    animationStep: 5,
    setAnimationStep: (step) => set(() => ({ animationStep: step })),

    header: false,
    setHeader: (header) => set(() => ({ header })),
  }))
);

export { useHomeStore };
