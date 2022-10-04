import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Section = 'intro' | 'about' | 'stories' | 'pathways' | 'contact';

type HomeState = {
  section: Section;
  setSection: (section: Section) => void;
  step: number;
  setStep: (step: number) => void;
};

const useHomeStore = create<HomeState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    section: 'intro',
    setSection: (section) => set(() => ({ section })),

    step: 0,
    setStep: (step) => set(() => ({ step: step })),
  }))
);

export { useHomeStore };
