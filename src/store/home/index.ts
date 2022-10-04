import create from 'zustand';
import { devtools } from 'zustand/middleware';

type HomeState = {
  step: number;
  setStep: (step: number) => void;
};

const useHomeStore = create<HomeState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    step: 0,
    setStep: (step) => set(() => ({ step: step })),
  }))
);

export { useHomeStore };
