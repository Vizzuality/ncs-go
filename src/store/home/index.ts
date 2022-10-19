import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Section = 'intro' | 'header' | 'about' | 'stories' | 'featured-science' | 'contact';

type HomeState = {
  section: Section;
  setSection: (section: Section) => void;
  subSection: number;
  setSubSection: (subSection: number) => void;
  step: number;
  setStep: (step: number) => void;
  header: boolean;
  setHeader: (header: boolean) => void;
};

const useHomeStore = create<HomeState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    section: 'intro',
    setSection: (section) => set(() => ({ section })),

    subSection: 0,
    setSubSection: (subSection) => set(() => ({ subSection: subSection })),

    step: 0,
    setStep: (step) => set(() => ({ step: step })),

    header: false,
    setHeader: (header) => set(() => ({ header })),
  }))
);

export { useHomeStore };
