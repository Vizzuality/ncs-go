import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Filters = {
  categories: string[];
  media: string[];
  countries: string[];
};
type UIState = {
  menu: boolean;
  openMenu: () => void;
  closeMenu: () => void;

  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const useUIStore = create<UIState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    menu: false,
    openMenu: () => set(() => ({ menu: true })),
    closeMenu: () => set(() => ({ menu: false })),

    filters: {
      categories: [],
      media: [],
      countries: [],
    },
    setFilters: (filters) => set(() => ({ filters })),
  }))
);

export { useUIStore };
