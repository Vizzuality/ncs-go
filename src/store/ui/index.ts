import create from 'zustand';
import { devtools } from 'zustand/middleware';

type UIState = {
  menu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const useUIStore = create<UIState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    menu: false,
    openMenu: () => set(() => ({ menu: true })),
    closeMenu: () => set(() => ({ menu: false })),
  }))
);

export { useUIStore };
